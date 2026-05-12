import { defineConfig } from "astro/config";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserPage = repo === `${owner}.github.io`;

export default defineConfig({
  site: process.env.SITE ?? "https://hilmimuktitama.github.io",
  base: process.env.BASE_PATH ?? (isGitHubActions && repo && !isUserPage ? `/${repo}` : "/"),
  output: "static"
});
