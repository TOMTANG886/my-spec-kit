# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shared spec and type scaffold for the team. Acts as the **single source of truth** for API contracts and coding standards. All team projects consume the spec via `spec-reader-mcp`.

## Live Spec URL

```
https://raw.githubusercontent.com/TOMTANG886/my-spec-kit/main/specs/api.yaml
```

Use this URL with `spec-reader-mcp` to fetch the latest contract. Always update `specs/api.yaml` (and `src/types.ts` if types change) before implementing new endpoints.

## Development Commands

```bash
npm run lint    # lint — run after any change
```

_(Build and test commands to be added once tooling is wired up.)_

## Architecture

```
specs/api.yaml        ← canonical OpenAPI 3.1 contract (edit this, not api.md)
specs/api.md          ← human summary + spec URL reference
specs/team-spec-kit.md ← team coding standards
src/types.ts          ← shared TypeScript types (ApiResponse, Result, ErrorCode)
src/services/         ← business logic (to be added)
src/components/       ← UI components styled with Tailwind (to be added)
```

**`ApiResponse<T>`** is the required envelope for every API response: `{ status, data, message }`.
**`Result<T>`** is the internal error wrapper — use `Result.fail(ErrorCode.X, "msg")` instead of `throw`.
**`ErrorCode`** enum must stay in sync between `src/types.ts` and `specs/api.yaml`.

## Team Spec-kit Standards

Full rules in [`specs/team-spec-kit.md`](specs/team-spec-kit.md). Key points:

- **Naming:** camelCase (vars/functions), PascalCase (classes/types), kebab-case (files)
- **No raw throws** in business logic — always return `Result.fail(...)`
- **Update `specs/api.yaml` before** implementing or changing any endpoint
- **TDD:** write a failing test first, then implement minimal code to pass it
- **Tailwind:** utility-first, tokens in `tailwind.config.js`, mobile-first, ARIA required

## MCP Setup for New Projects

Copy `.claude/settings.json.template` to your project's `.claude/settings.json` and replace the paths:

```json
{
  "mcpServers": {
    "spec-reader": {
      "command": "uv",
      "args": ["run", "python", "server.py"],
      "cwd": "/ABSOLUTE/PATH/TO/my-mcp-server/spec-reader-mcp"
    },
    "codebase-analyzer": {
      "command": "uv",
      "args": ["run", "python", "server.py"],
      "cwd": "/ABSOLUTE/PATH/TO/my-mcp-server/codabse-analyzer-mcp"
    }
  }
}
```

Then Claude Code in that project can fetch the latest spec:

> "Use spec-reader to fetch `https://raw.githubusercontent.com/TOMTANG886/my-spec-kit/main/specs/api.yaml` and implement the `/users` endpoint."
