import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd, exit } from "node:process";

const root = cwd();
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

const indexHtml = existsSync(join(root, "dist", "index.html"))
  ? read("dist/index.html")
  : "";
const cssDir = join(root, "dist", "_astro");
const css = existsSync(cssDir)
  ? readdirSync(cssDir)
      .filter((file) => file.endsWith(".css"))
      .map((file) => readFileSync(join(cssDir, file), "utf8"))
      .join("\n")
  : "";
const seniorTpm = read("src/content/resume/mekari-senior-technical-program-manager.md");
const projectTruth = read("src/content/projects/program-truth.md");
const programSystems = read("src/content/projects/private-program-systems.md");
const aiTooling = read("src/content/projects/private-ai-delivery-tooling.md");

check(indexHtml.includes('rel="canonical"'), "homepage should render a canonical link");
check(indexHtml.includes('property="og:title"'), "homepage should render Open Graph title metadata");
check(indexHtml.includes('name="twitter:card"'), "homepage should render Twitter card metadata");
check(indexHtml.includes('rel="icon"'), "homepage should render a favicon link");
check(indexHtml.includes("og-image.png"), "homepage should reference the PNG share image");

check(css.includes(".prose p+p"), "prose paragraphs should have spacing between adjacent paragraphs");
check(css.includes(".prose ul,.prose ol"), "prose lists should have readable spacing");

check(
  seniorTpm.includes("Quarterly") && seniorTpm.includes("senior stakeholders"),
  "senior TPM resume bullets should include scope and stakeholder evidence"
);
check(
  !seniorTpm.includes("  - lead planning"),
  "senior TPM bullets should not remain lowercase responsibility statements"
);

for (const [label, content] of [
  ["Program Truth", projectTruth],
  ["Program operating model", programSystems],
  ["AI-assisted planning workflow", aiTooling]
]) {
  check(content.includes("## Context"), `${label} should include context`);
  check(content.includes("## What changed"), `${label} should include what changed`);
  check(content.includes("## Evidence I can show"), `${label} should include sanitized evidence`);
}

if (failures.length > 0) {
  console.error("Site verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  exit(1);
}

console.log("Site verification passed.");
