#!/usr/bin/env -S deno run --allow-env=DENO_AUTH_TOKENS,DENO_DIR,HOME,XDG_CACHE_HOME --allow-read --allow-write --allow-run=npm --allow-net=deno.land

import { build, BuildOptions } from "https://deno.land/x/dnt@0.7.4/mod.ts";

const entryPoints: BuildOptions["entryPoints"] = ["./src/_index.ts"];

for await (const entry of Deno.readDir("./src")) {
  if (entry.name.startsWith("_") || entry.isDirectory) continue;

  const key = entry.name.slice(0, entry.name.lastIndexOf("."));
  entryPoints.push({ name: `./${key}`, path: `./src/${entry.name}` });
}

await build({
  entryPoints,
  outDir: "./node_package",
  package: {
    name: "xnd",
    version: Deno.args[0]?.replace(/^v/, ""),
    description:
      "Safely extending and complementing JavaScript built-ins since 2021.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/xndland/xnd.git",
    },
    bugs: {
      url: "https://github.com/xndland/xnd/issues",
    },
    keywords: ["es6", "stdlib", "util"],
  },
});

await Deno.copyFile("LICENSE", "node_package/LICENSE");
await Deno.copyFile("README.md", "node_package/README.md");
