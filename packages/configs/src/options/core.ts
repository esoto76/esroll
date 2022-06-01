import type { InputOption } from "rollup";
import { ESRFormats } from "@/types";

export const DefBDir: string = "src";
export const DefFormats: ESRFormats = ["cjs", "es"];
export const DefInput: InputOption = { index: "./src/index.ts" };
