const path = require("path");
const { build } = require("esbuild");

build({
    entryPoints: [path.resolve(__dirname, "custom-echarts.js")],
    outfile: path.resolve(__dirname, "../dist/echarts.esm.min.js"),
    format: "esm",
    minify: true,
    resolveExtensions: [".ts", ".js"],
    define: {
        __DEV__: "false",
        "process.env.NODE_ENV": '"production"',
    },
})
    .then(() => {
        console.log("Built: dist/echarts.esm.min.js");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
