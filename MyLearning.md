# TSDX React User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

## Steps

1. Go into the `example` folder, delete the dev dependencies, and run this command:

```bash
npm i -D @types/react @types/react-dom parcel typescript
npm i react-app-polyfill
```

2. Change the parcel script to remove the parcel cache every time, since there is no hot module reloading:

   ```json
   {
     "scripts": {
       "start": "rm -rf .parcel-cache && parcel index.html",
       "build": "parcel build index.html"
     }
   }
   ```

3. You can import JS files out of the box into your components, as they will get bundled. CSS is a different story. To bundle and import CSS in your components, create a `tsdx.config.js`, run `npm i -D rollup-plugin-postcss` and paste this code:

```js
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [],
      })
    );
    return config;
  },
};
```

4. Do `npm publish --access public` to publish to NPM.
5. Do `npm version minor` to change the minor versioning of your app

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
