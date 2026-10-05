# vitest-browser-partial-mock-factory

Reproduction for a Vitest Browser Mode bug: a `vi.mock` factory that omits an export fails to link.

```sh
pnpm install
pnpm exec playwright install chromium
pnpm test       # Browser Mode (Chromium): fails
pnpm test:node  # Node: passes
```

Browser Mode error:

```
SyntaxError: The requested module '/src/module.ts' does not provide an export named 'unused'
```
