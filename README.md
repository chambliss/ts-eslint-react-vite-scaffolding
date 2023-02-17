# Starter Config

## Tooling Choices

### Vite

Blazing fast HMR and easy to set up / configure.

Note: `tsconfig.vite.json` is configuration for the Vite process itself, which runs in Node.

### TypeScript

See `tsconfig.json`. Note that TS is configured to use the installed language server in the repo/workspace itself rather than the global/user-level VSC language server.

### ESLint

Saving devs from themselves, one rule at a time. This repo includes additional plugins for setting up React- and React Hooks-specific rules.

### TypeScript-ESLint

Making ESLint play nice with TypeScript.

### Prettier

Takes care of the formatting so I don't have to think about it. Note that the `.prettierrc` specified in the workspace will be respected by the Prettier VSC extension.

(Later: revisit whether I want to enforce single/double quotes or whether I'd like to force wrap prose lines)

### pnpm

Basically a drop-in replacement for `npm`, but much, much faster.

### CSS Modules

Vite automatically supports CSSM with no setup, although additional configuration is available in `vite.config.ts` if needed. Any file ending in `.module.css` will automatically be considered a CSS Module.

See `App.module.css` for example.

## Recommended Libraries and Solutions

### Frameworks

Not included here, since there is so much framework-specific configuration when setting up framework projects.

- Next
- maybe Astro
- **Cross-platform**: React Native or Electron

### Deployment

- TODO : Vercel / fly.io / Cloudflare / something else? (haven't found a great solution to this yet)

### CMS

TODO / Don't know yet, still looking

### General

Strong library candidates for solving various problems:

- **Hooks for browser APIs:** react-use
- **Data fetching, state management, mutation:** react-query / TanStack Query, maybe swr
- **Accessible component libraries w/ unopinionated styling:** Headless UI, Radix UI, Chakra UI
- **Complex component logic (e.g. Autocomplete):** hooks from Material UI
- **Error tracking:** Sentry, obvs

### Specialized

- **Rendering markdown + syntax highlighting (like for blogs):** Nextra
- **Table component:** React Table / TanStack Table
- **Form state management:** formik and react-hook-form both seem perfectly acceptable, although the latter is pulling ahead in recent years.
- **Animations:** Framer Motion
- **Charts:** probably recharts
- **Super fancy data viz:** d3
- **Hotkeys:** react-hotkeys (unmaintained since mid-2022, but still seems to work well enough)

## TODO

### Set up `husky`

To handle pre-commit hooks and such.

### Set up a good testing solution

Current thoughts: Playwright for more complex tests, vitest for unit tests?

### `package.json`

Everything is set to "latest," but these should probably be pinned after initial installation.
