import type {
  InputOption,
  InputOptions,
  OutputOptions,
  ModuleFormat,
} from "rollup";

export type ESRFormats = ModuleFormat | ModuleFormat[];

export type ESRRollupInputOptions = Omit<
  InputOptions,
  "input" | "inlineDynamicImports" | "manualChunks" | "preserveModules"
>;

export type ESRRollupOutputOptions = Omit<
  OutputOptions,
  "dynamicImportFunction" | "namespaceToStringTag" | "preferConst"
>;

export interface ESRRollupOptions extends ESRRollupInputOptions {
  output?: ESRRollupOutputOptions | ESRRollupOutputOptions[];
}

export interface ESRCoreOptions {
  bDir: string;
  formats: ESRFormats;
  input: InputOption;
  outputs: ESRRollupOutputOptions;
}

export interface ESROptions extends ESRCoreOptions {
  rollup?: ESRRollupOptions;
}
