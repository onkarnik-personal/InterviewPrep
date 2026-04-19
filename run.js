const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const name = process.argv[2];
if (!name) {
  console.error("Usage: npm run solve <problemName>");
  process.exit(1);
}

const target = name.endsWith(".ts") ? name : `${name}.ts`;

function findFile(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(full);
      if (found) return found;
    } else if (entry.name === target) {
      return full;
    }
  }
  return null;
}

const file = findFile("problems");
if (!file) {
  console.error(`Not found: ${target}`);
  process.exit(1);
}

execSync(`npx tsx ${file}`, { stdio: "inherit" });
