import { DefBDir, DefFormats, DefInput } from "./core";
import { DefOutputs } from "./outputs";
import { DefRollupOptions } from "./rollup";
import { ESROptions } from "@/types";

export const DefOptions: ESROptions = {
  bDir: DefBDir,
  formats: DefFormats,
  input: DefInput,
  outputs: DefOutputs,
  rollup: DefRollupOptions,
};

export * from "./core";
export * from "./outputs";
export * from "./rollup";
