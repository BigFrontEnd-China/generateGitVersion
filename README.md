# rollup-plugin-generate-git-version

🍣 A Rollup plugin Generate the front-end current release git version number and the last commit information file.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-generate-git-version --save-dev
```

Using pnpm:

```console
pnpm install rollup-plugin-generate-git-version --save-dev
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import generateGitVersion from "rollup-plugin-generate-git-version";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [generateGitVersion({ fileName: "gitVersion.json" })],
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

## Options

### `fileName`

Type: `String`<br>
Default: `"gitVersion.json"`
