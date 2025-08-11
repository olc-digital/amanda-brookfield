# Project policy (instructions for Claude Code)
- Always use pnpm as the package manager
- Primary language: **TypeScript**. When adding new files, prefer `.ts` / `.tsx`. Convert JS to TS where reasonable.
- Always add strong types, interfaces, and return types. Avoid `any` unless justified and documented.
- Use project's `tsconfig.json`. If missing, create `tsconfig.json` with recommended defaults.
- When making edits, include types. Prefer small incremental PRs.