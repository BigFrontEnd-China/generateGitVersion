import typescript from "@rollup/plugin-typescript";
const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    { format: "es", file: pkg.module },
    { format: "cjs", file: pkg.main, exports: "auto" },
  ],
  external: ["child_process"],
  plugins: [typescript({ sourceMap: false })],
};
