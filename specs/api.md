# API Contract

The canonical API contract is **`specs/api.yaml`** (OpenAPI 3.1).

> Always edit `api.yaml` — not this file — before implementing or changing any API surface.

## Key conventions

- All responses use the `ApiResponse` envelope: `{ status, data, message }`
- Errors set `data` to `{ code: ErrorCode, message: string }` (see `src/types.ts`)
- Add new `ErrorCode` values to both `api.yaml` and `src/types.ts` together

## Live spec URL

```
https://raw.githubusercontent.com/TOMTANG886/my-spec-kit/main/specs/api.yaml
```

Use this URL with `spec-reader-mcp` to fetch the latest contract from any project.
