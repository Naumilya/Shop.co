# shop-co

🛍️ Hey there! This template will help you get started with developing in Vue 3 using Vite.

## Recommended IDE Setup

✨ I recommend using VSCode along with the Volar extension. You can install Volar from the Marketplace (https://marketplace.visualstudio.com/items?itemName=Vue.volar). Make sure to disable Vetur if you have it installed. Additionally, install the TypeScript Vue Plugin (Volar) from the Marketplace (https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for .vue Imports in TS

🚧 TypeScript cannot handle type information for .vue imports by default. To overcome this, we replace the tsc CLI with vue-tsc for type checking. In your editor, you'll need the TypeScript Vue Plugin (Volar) to make the TypeScript language service aware of .vue types.

⚡️ If you find the standalone TypeScript plugin to be a bit slow, Volar has implemented a Take Over Mode (https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that offers better performance. To enable it, follow these steps:

1. Disable the built-in TypeScript extension:
   - Run the command "Extensions: Show Built-in Extensions" from the VSCode command palette.
   - Find "TypeScript and JavaScript Language Features," right-click, and select "Disable (Workspace)."
2. Reload the VSCode window by running the "Developer: Reload Window" command from the command palette.

## Customize configuration

✨ If you need to customize the configuration of your Vite project, refer to the Vite Configuration Reference (https://vitejs.dev/config/).

## Project Setup

npm install

### Compile and Hot-Reload for Development

To compile and hot-reload your project during development, run the following command:

npm run dev

### Type-Check, Compile, and Minify for Production

To type-check, compile, and minify your project for production, use the following command:

npm run build

### Run Unit Tests with Vitest

To run unit tests using Vitest (https://vitest.dev/), use the following command:

npm run test:unit

### Run End-to-End Tests with Cypress

To run end-to-end tests with Cypress (https://www.cypress.io/), use the following command:

npm run test:e2e:dev

This command runs the tests against the Vite development server, which is much faster than the production build. However, it's still recommended to test the production build using test:e2e before deploying, especially in CI environments. To do so, run the following commands:

npm run build
npm run test:e2e

### Lint with ESLint

To lint your code using ESLint (https://eslint.org/), run the following command:

npm run lint

That's it! You're all set to start building your awesome Vue 3 application. Happy coding! 😄🚀
