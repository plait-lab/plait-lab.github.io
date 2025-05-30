# plait-lab.org

This repository contains source code for the new [plait-lab.org](https://plait-lab.org/). We use [TypeScript](https://www.typescriptlang.org/) alongside [Next.js](https://nextjs.org/) to power the site, taking advantage of Next's [static generation](https://nextjs.org/docs/basic-features/pages#static-generation) (SSG) capabilities to produce plain HTML, CSS, and JSON at build time. If you're familiar with [React](https://beta.reactjs.org/), Next provides a nice set of abstractions on top of React to handle things like routing, data fetching, image optimization, development servers, etc. Finally, we use a utility CSS framework, [Tailwind](https://tailwindcss.com/), for styling.
## Getting Started

To get the repository up and running, make sure you have [Node](https://nodejs.org/en/) and `npm` installed. Then, install dependencies by running:

```sh
npm install
```

After installing dependencies, run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

To see issues that will prevent github from deploying, even though run dev won't fail:

```sh
npm run build
```

## Recommended Extensions

If using VSCode, there are a few extensions that will help make the development experience smoother.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) – Prettier is a formatter for JavaScript, HTML, CSS, JSON, and other languages. Using this extensions with `editor.formatOnSave` enabled (see the documentation) will format your code each time you save.
- [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) – Provides inline intellisense for Tailwind classes.

## Optimizing Images

Next.js has some neat features for automated [image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images). However, most require your application to be deployed on a Node.js web server rather than as a static site. Alas, you can't have it all.

To try to squeeze back some benefits, we use [`pngquant`](https://pngquant.org/) to reduce image sizes. Contributors mostly don't need to worry about this, but if you'd like to optimize images locally you can take the following steps:

1. Install `pngquant`. On macOS, we suggest using Homebrew:

```sh
brew install pngquant
```

2. Run `npm run optimize:images`.

This script will optimize all images in the `public` directory.

If you receive a "Permission denied" error, make sure you have permissions to run the file.

```sh
chmod +x ./src/scripts/optimize-images.sh
```