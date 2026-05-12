# Add Timeline Truth Work Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `timeline-truth` as one additional public GitHub work entry on the web profile.

**Architecture:** Keep the existing Astro content collection model. Add one Markdown project entry under `src/content/projects/` using the same frontmatter schema and narrative structure as `program-truth`.

**Tech Stack:** Astro 5, Markdown content collections, TypeScript schema validation through `npm run build`.

---

## File Structure

- Create `src/content/projects/timeline-truth.md`: public GitHub project entry for the Timeline Truth repository.
- Read `src/content/projects/program-truth.md`: style reference for structure and disclosure tone.
- Verify with `npm run build`: confirms content schema and generated work routes.

---

### Task 1: Add Timeline Truth Project Entry

**Files:**
- Create: `src/content/projects/timeline-truth.md`
- Read: `src/content/projects/program-truth.md`

- [ ] **Step 1: Create the project markdown file**

Add `src/content/projects/timeline-truth.md` with this content:

```markdown
---
title: "Timeline Truth"
description: "A local MCP server that turns messy planning notes into reviewable timeline artifacts with gaps, assumptions, and source references preserved."
source: "github"
status: "public"
repoUrl: "https://github.com/hilmimuktitama/timeline-truth"
language: "JavaScript"
updatedDate: 2026-05-12
featured: true
order: 20
tags:
  - TPM
  - MCP
  - planning
  - timeline
---

## Context

Timeline Truth is a local MCP server for AI-agent TPM workflows. It takes rough planning inputs such as PRD snippets, Jira notes, CSV exports, launch checklists, and status updates, then turns them into normalized timeline artifacts.

The core constraint is deliberate: the tool should not invent missing dates, owners, or dependencies. It keeps source references, gaps, assumptions, and validation output visible so a human can review the timeline before using it in a plan or status update.

## What changed

- Compiled messy planning text into structured timeline JSON.
- Preserved source references instead of flattening context into a confident summary.
- Flagged missing dates, owners, dependency issues, and sequencing problems.
- Rendered portable Mermaid and Markdown outputs for planning docs and status reports.

## Evidence I can show

- Public repository with install instructions, MCP tool boundaries, examples, and tests.
- Example inputs for PRD snippets, Jira CSV exports, launch checklists, and status updates.
- A narrow project boundary that keeps the tool focused on timeline compilation and validation.

## Why It Matters

AI can draft a timeline quickly, but program operators still need to know what is known, what is missing, and where each planning item came from. Timeline Truth turns that review discipline into a local tool instead of relying on a polished rewrite.
```

- [ ] **Step 2: Verify project collection schema**

Run:

```powershell
rtk npm run build
```

Expected: Astro check and build complete successfully. The generated output includes a work route for `timeline-truth`.

---

## Self-Review

Spec coverage:

- User chose Alternative 1: covered by adding only `timeline-truth`.
- Existing profile design retained: covered by creating content only.
- Public GitHub evidence used: covered by repo URL, README-derived positioning, and `source: "github"`.

Placeholder scan:

- No placeholders, TODOs, or vague implementation steps remain.

Type consistency:

- Project frontmatter matches `src/content.config.ts`: `title`, `description`, `source`, `status`, `repoUrl`, `language`, `updatedDate`, `featured`, `order`, and `tags`.
