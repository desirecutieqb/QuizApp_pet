"use client";

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";
import { useEffect, useState } from "react";
function LayoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isPublicRoute = ["sign-in", "sign-up"].includes(
        pathname.split("/")[1]
    );

    const getCurrentUser = async () => {
        try {
            const response: any = await fetchUsers();
            if (response.error)
                throw new Error(response.error.message);
        } catch (error) {
            console.log(error);
        } finally {
            return;
        }
    };
    

    useEffect(() => {
        if (!isPublicRoute) getCurrentUser();
    }, []);
    const getContent = () => {
        if (isPublicRoute) return null;
        return <>{children}</>;
    };

    return (
        <div className="min-h-screen bg-secondary flex flexCol justify-between">
            {getContent()}
        </div>
    );
}

export default LayoutProvider;