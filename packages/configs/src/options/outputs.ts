import { ESRRollupOutputOptions } from "@/types";
import type { ModuleFormat, GeneratedCodeOptions } from "rollup";

export const DefOutputFileNames: string = "[name].js";

export const DefOutputChunkFileNames: ESRRollupOutputOptions["chunkFileNames"] =
  DefOutputFileNames;

export const DefOutputDir: string = "dist";

export const DefOutputEntryFileNames: ESRRollupOutputOptions["entryFileNames"] =
  DefOutputFileNames;

export const DefOutputExports: ESRRollupOutputOptions["exports"] = "named";

export const DefOutputExternalLiveBindings: boolean = false;

export const DefOutputFormat: ModuleFormat = "cjs";

export const DefOutputFreeze: boolean = false;

export const DefOutputGenCodeConstBindings: GeneratedCodeOptions["constBindings"] =
  true;

export const DefOutputGenCode: ESRRollupOutputOptions["generatedCode"] = {
  constBindings: DefOutputGenCodeConstBindings,
};

export const DefOutputs: ESRRollupOutputOptions = {
  chunkFileNames: DefOutputChunkFileNames,
  dir: DefOutputDir,
  entryFileNames: DefOutputEntryFileNames,
  exports: DefOutputExports,
  externalLiveBindings: DefOutputExternalLiveBindings,
  format: DefOutputFormat,
  freeze: DefOutputFreeze,
  generatedCode: DefOutputGenCode,
};
