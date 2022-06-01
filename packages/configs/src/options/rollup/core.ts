import type {
  ExternalOption,
  InputOptions,
  WatcherOptions,
  ChokidarOptions,
} from "rollup";

export const DefRollupExternal: ExternalOption = [];

export const DefRollupTreeshake: InputOptions["treeshake"] = "smallest";

export const DefRollupWatchExclude: WatcherOptions["exclude"] =
  "node_modules/**";

export const DefRollupWatchInclude: WatcherOptions["include"] = "src/**";

export const DefRollupWatchChokidar: ChokidarOptions = {};

export const DefRollupWatch: WatcherOptions = {
  exclude: DefRollupWatchExclude,
  include: DefRollupWatchInclude,
  chokidar: DefRollupWatchChokidar,
};
