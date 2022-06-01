import type {
  InputOption,
  InputOptions,
  OutputOptions,
  ModuleFormat,
} from "rollup";

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

export interface ESROptions {
  input: InputOption;
  outputs: ESRRollupOutputOptions;
  formats: ModuleFormat | ModuleFormat[];
  bdir: string;
  rollup: ESRRollupOptions;
}
