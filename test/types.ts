import { RollupOptions } from "rollup";

import generateGitVersion from "..";

const config: RollupOptions = {
  input: "main.js",
  output: {
    file: "bundle.js",
    format: "iife",
  },
  plugins: [generateGitVersion()],
};

export default config;
