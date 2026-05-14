---
title: "Capture Truth"
description: "A local-first evidence intake package that turns pasted notes, local files, exports, and adapter outputs into neutral evidence packs before analysis begins."
source: "github"
status: "public"
repoUrl: "https://github.com/hilmimuktitama/capture-truth"
language: "JavaScript"
updatedDate: 2026-05-13
featured: true
order: 5
tags:
  - TPM
  - MCP
  - evidence
  - intake
---

## Context

Capture Truth handles the step before program analysis: preserving what was captured, where it came from, and whether the source material is complete enough to trust downstream.

It turns pasted text, local files, CSV or JSON exports, and read-only adapter outputs into a neutral `evidence_pack` with source snapshots, extracted claims, source references, freshness metadata, validation gaps, unresolved conflicts, and portable renders.

## What changed

- Made evidence intake a separate workflow instead of mixing capture with status, risk, or timeline judgment.
- Preserved source identity, capture time, freshness, and source references before handing material to downstream workflows.
- Added validation for missing source refs, missing capture metadata, stale sources, duplicate ids, and unresolved conflicts.
- Supported safe render profiles so repo artifacts can omit raw source bodies while keeping reviewable evidence structure.

## Evidence I can show

- Public repository with CLI commands, MCP tool boundaries, install notes, and development checks.
- Read-only compact intake helpers for Jira and Confluence-shaped evidence.
- Benchmark fixture covering stale sources, source conflicts, repo-safe export, redaction checks, and compact adapters.

## Why It Matters

Program workflows can only be as reliable as the material they start from. Capture Truth keeps intake narrow and explicit, so later status, risk, dependency, or timeline work starts from reviewable evidence instead of an untraceable summary.
