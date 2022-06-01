import type { RollupOptions } from "rollup";
import { DefRollupExternal, DefRollupTreeshake, DefRollupWatch } from "./core";

export const DefRollupOptions: RollupOptions = {
  external: DefRollupExternal,
  treeshake: DefRollupTreeshake,
  watch: DefRollupWatch,
};

export * from "./core";
