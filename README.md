# Basic Yarn 2 Next.js Project

Packages used ->

- base dependencies: `yarn add next react react-dom`
- extra dependencies 'anything goes here, those can be removed': `yarn add axios `
- devDependencies: `yarn add --dev prettier typescript eslint"<8.0.0" @yarnpkg/sdks @types/node @types/react eslint-config-next eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier typescript tailwindcss@latest postcss@latest autoprefixer@latest playwright jest`

### --Can be skipped--

#### This step could be skipped, since the project is initialised already

Setup with yarn 2:

- make sure to first enable corepack(supported in node 16.10 and up) by running `corepack enable`; must be run in an admin console
- run -> `yarn init -2`

### --Can be skipped--

## Install:

For prettier it is recommended to set it to format on save, and have it selected as a formatter in VSCode

To set the defaults, press `CMD + SHIFT + P` (on MacOS) or `CTRL + Shift + P` (on Windows), then type in `preferences open settings`(Preferences: Open Settings(JSON))
Then in the file add -> `"editor.formatOnSave": true,`
Alternatively press `CTRL + ,`, then type `format on save` and tick the checkbox on `Editor: Format on Save`

- Base installation: `yarn install`
- To add typescript and prettier capabilities for VSCode [check yarn documantation for TS settings](https://yarnpkg.com/getting-started/editor-sdks#vscode) : `yarn sdks typescript prettier`

## Using commands

- for the `next ...` commands check Next.js docs
- `prettier-format` command should only be run in case your editor doesn't support formatting on save
