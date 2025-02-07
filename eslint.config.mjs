import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

let eslintConfig = [...compat.extends("next/core-web-vitals")];

eslintConfig = eslintConfig.map((conf) => {
  if (conf.parser && typeof conf.parser.parse === "function") {
    delete conf.parser.parse;
  }
  return conf;
});

export default eslintConfig;