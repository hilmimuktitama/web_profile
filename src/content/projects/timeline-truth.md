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
