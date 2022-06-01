import { DefBDir, DefFormats, DefInput } from "./core";
import { DefOutputs } from "./outputs";
import { ESROptions } from "@/types";

export const DefOptions: ESROptions = {
  bDir: DefBDir,
  formats: DefFormats,
  input: DefInput,
  outputs: DefOutputs,
};

export * from "./core";
export * from "./outputs";
