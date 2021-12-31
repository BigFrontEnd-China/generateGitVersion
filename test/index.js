const test = require("ava");
const { rollup } = require("rollup");
const generateGitVersion = require("..");
process.chdir(__dirname);

test("generate git version", async (t) => {
  const bundle = await rollup({
    input: "fixtures/basic/main.js",
    plugins: [generateGitVersion()],
  });
  const { output } = await bundle.generate({ format: "cjs", exports: "auto" });
  console.log(output);
  t.is(output.length, 2);
});
