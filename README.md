# Traded.co platform

Summary

1. [General Documentation](#documentation)
2. [How to run](#how-to-run)
3. [How to test](#testing)
4. [How to deploy](#deploy-to-production)


---

## Documentation
General documentation such as Coding Standards, Git flow, Figma etc can be found in
[Confluence](https://traded.atlassian.net/l/cp/BPvdBBa6)



---

## How to run

#### Requirements

- Node.js 14+ and npm

#### Getting started



```bash
Clone the projact
cd folder
yarn
```

Then, you can run locally in development mode with live reload:

```bash
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project. Make sure to test the feature in multiple browsers :)


---
## Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

---


## Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

You can create an optimized production build with:

```bash
npm run build-prod
```