---
title: "Timeline Truth"
description: "A planning-quality workflow that turns rough timeline inputs into reviewable artifacts with missing dates, dependencies, assumptions, and source references visible."
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

Timeline Truth starts from an operating problem: delivery timelines often look cleaner than the source inputs behind them. PRD snippets, Jira notes, CSV exports, launch checklists, and status updates can disagree on dates, owners, dependencies, and assumptions.

The public implementation is a local MCP server, but the point is review discipline. The workflow keeps source references, gaps, assumptions, and validation output visible so a human can review timeline readiness before using it in a plan or status update.

## What changed

- Turned messy planning inputs into structured timeline artifacts for review.
- Preserved source references instead of flattening context into a confident summary.
- Flagged missing dates, owners, dependency issues, and sequencing problems.
- Produced Mermaid and Markdown outputs after validation, so timelines could move into planning docs and status reports.

## Evidence I can show

- Public repository with install instructions, MCP tool boundaries, examples, and tests.
- Example inputs for PRD snippets, Jira CSV exports, launch checklists, and status updates.
- A narrow project boundary that keeps the tool focused on timeline compilation and validation.

## Why It Matters

AI can draft a timeline quickly, but program operators still need to know what is known, what is missing, and where each planning item came from. Timeline Truth turns that review discipline into a local tool instead of relying on a polished rewrite.
