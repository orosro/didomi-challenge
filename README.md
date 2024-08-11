#  Didomi homework

- 08.08.2024 - scaffold project

## Approach 

After reading the [requirements](https://github.com/didomi/challenges/tree/master/frontend) I listed the basic requirements from a tech stack pov.
We needed a simple app written in React and using Material UI, but we also needed to handle:
- Bundling - [Vite](https://vitejs.dev/) - faster than webpack
- Unit Tests - [Vitest](https://vitest.dev/) - Focuses on speed, mixes well with Vite
- Unit Test Utility - [RTL](https://testing-library.com/) - closer to how users are using the app
- E2E Tests - [Playwright](https://playwright.dev/) 
- Development Flow - [Storybook](https://storybook.js.org/) - easy component dev in isolation
- BE 2 FE/API - [MSW](https://mswjs.io/) 
- A11y - [AXE](https://github.com/dequelabs/axe-core) but with [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright) 
- Linting - Eslint, Prettier, Stylelint
- ...

When creating a new app there are a few challenges that need to be tackled
- Tooling
- Project structure
- Business logic

I decided to "skip" the first 2 points and scaffold the project using an existing template selected based on the above libs. Why? 
It would have taken me a lot of time and it's not worth it. Most of the tools are configuration based and it usually a trial and error process until you get the combination that fits best your project.


### Scaffold app

This app used [degit](https://github.com/Rich-Harris/degit) and a SPA [Vite template](https://github.com/bartstc/vite-ts-react-template) using the command `npx degit bartstc/vite-ts-react-template <folder>`


## Basic commands

| Command                | Description                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`             | Runs dev server with the HMR locally on port `5173`                                                                                                        |
| `pnpm build`           | Builds optimized app package                                                                                                                               |
| `pnpm test`            | Runs unit tests                                                                                                                                            |
| `pnpm storybook`       | Runs a Storybook locally on port `6006`                                                                                                                    |
| `pnpm test-storybook`  | Runs integration tests (requires a running Storybook on port `6006` - more info [here](https://storybook.js.org/blog/interaction-testing-with-storybook/)) |
| `pnpm build-storybook` | Builds static app with [a Storybook's content](https://storybook.js.org/docs/react/sharing/publish-storybook)                                              |



## TODO

- [ ] Use Material UI instead chakra-ui
- [ ] Decide on a way to store data (zustand vs signals)
- [ ] Implement a [changelog](https://changelog.md/)
- [ ] Create basic diagram for the app
- [ ] Write the components
- [ ] Write basic Unit tests
- [ ] Write basic E2E tests
- [ ] Remove extra tool noise



### Key features

- Dev environment based on [ViteJS 5](https://vitejs.dev/) toolkit.
- Testing environment based on [Vitest](https://vitest.dev/) and [Storybook 8](https://storybook.js.org/).
- Static code analysis: eslint, prettier, husky.
- TypeScript support.
- [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) config for VS Code.
- [PNPM](https://pnpm.io/) as a package manager.
- CI setup (automate tests, build, deploy draft) with [GitHub Actions](https://docs.github.com/en/actions).


### Key features

- Everything that's included in the `basic` version.
- Simple, modular, and accessible components based on [Chakra UI](https://chakra-ui.com/).
- Data fetching and external state synchronization based on [React Query](https://tanstack.com/query/v4/).
- Routing based on [React Router 6](https://reactrouter.com/en/main/start/overview).
- ~~Date formatting based on [DayJS](https://day.js.org/).~~
- Formatting tools for numbers, monetary values, and dates (easily extendable with any date library like [DayJS](https://day.js.org/)).
- State management with [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction).
- API mocking with [MSW](https://mswjs.io/).
- A demo app with authentication presenting project structure, good practices, and used tooling in action (with a little help of [Fake Store API](https://fakestoreapi.com/docs)).
