import { readFileSync, writeFileSync } from "node:fs";

const changelogFile = readFileSync("./CHANGELOG.md", "utf-8");
const changelog = changelogFile.replace(/^[\s\S]*<!-- start -->/, "").trim();

const readmeSource = readFileSync("./README.md", "utf-8");
const updated = readmeSource.replace(
  /(<!-- changelog-start -->)[\s\S]*(<!-- changelog-end -->)/,
  `$1\n\n${changelog.replace(/^#/g, "##")}\n\n$2`
);
writeFileSync("./README.md", updated);
console.log("Updated README!");
