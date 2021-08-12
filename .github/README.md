# Rollup Linaria template

<img src="./linaria-logo@2x.png" width="150"><img src="./rollup.svg" width="50">

This example shows how to use [Linaria](https://github.com/callstack/linaria) to build React packages.

It's kind of hard to find any documentation for this library (which is kind of bummer). So, the best thing you can do with it is to create example repositories…

## Scripts

* `yarn build` — that's all!
* `npm publish` — to publish to git NPM.

## Usage

Installation:

```bash
echo "@fedek6:registry" "https://npm.pkg.github.com" > .yarnrc
yarn add @fedek6/rollup-linaria-template@1.0.3
```

Import:

```tsx
import { HelloWorld } from "@fedek6/rollup-linaria-template";
import "@fedek6/rollup-linaria-template/styles.css";
```

## Inspirations

* [Reach UI](https://reach.tech/)
