// @ts-nocheck
import Alias from "@rollup/plugin-alias";
import Babel from "@rollup/plugin-babel";
import Commonjs from "@rollup/plugin-commonjs";
import Externals from "rollup-plugin-node-externals";
import Json from "@rollup/plugin-json";
import Resolve from "@rollup/plugin-node-resolve";
import TS from "rollup-plugin-ts";
import { resolve, sep } from "path";

const input = {
  index: "./src/index.ts",
};

const formats = ["cjs", "es"];

const external = [];

const root = resolve(__dirname);

const extensions = [
  ".mjs",
  ".js",
  ".jsx",
  ".json",
  ".sass",
  ".scss",
  ".ts",
  ".tsx",
  ".vue",
];

const customResolver = Resolve({ extensions });

const entries = [
  {
    find: "@/",
    replacement: resolve(root, "src"),
  },
];

const OKeys = (obj) => Object.keys(obj);

const GetManualChunks = (input) => {
  const keys = OKeys(input);
  if (keys.length <= 1) return;
  return function (id) {
    keys.find((k) =>
      id
        .split(sep)
        .join("/")
        .indexOf(input[k].repace("./", "") > -1)
    );
  };
};

const Output = {
  format: "cjs",
  dir: "dist",
  chunkFileNames: "[name].js",
  entryFileNames: "[name].js",
  preferConst: true,
  freeze: false,
  exports: "named",
  externalLiveBindings: false,
  manualChunks: GetManualChunks(input),
};

const watch = {
  exclude: "node_modules/**",
  include: "src/**",
  chokidar: {
    paths: "src/**",
  },
};

const treeshake = "smallest";

const GetOutput = (format = "cjs") => ({
  ...Output,
  format,
  chunkFileNames: `[name].${format === "es" ? "mjs" : "js"}`,
  entryFileNames: `[name].${format === "es" ? "mjs" : "js"}`,
});

const GetPlugins = (format = "cjs") => [
  Alias({ entries, customResolver }),
  Externals(),
  Resolve({ extensions, preferBuiltins: true }),
  TS({
    transpiler: "babel",
    browserslist: false,
    babelConfig: {
      plugins: ["@babel/plugin-transform-arrow-functions"],
    },
    ...(formats.indexOf(format) === 0
      ? { tsconfig: "tsconfig.json" }
      : {
          tsconfig: {
            fileName: "tsconfig.json",
            hook: (resolvedConfig) => ({
              ...resolvedConfig,
              declaration: false,
            }),
          },
        }),
    hook: {
      outputPath: (p) => p.replace("es.d", "d"),
    },
  }),
  Json({ namedExports: true, preferConst: true }),
  Babel({
    babelHelpers: "bundled",
  }),
  Commonjs({
    extensions,
  }),
];

export default () => {
  const configs = [];
  for (let format of formats) {
    configs.push({
      input,
      output: GetOutput(format),
      watch,
      external,
      treeshake,
      plugins: GetPlugins(format),
    });
  }
  return configs;
};
