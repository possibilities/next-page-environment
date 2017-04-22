# Next.js page environment decorator [![CircleCI](https://circleci.com/gh/possibilities/next-page-environment.svg?style=svg)](https://circleci.com/gh/possibilities/next-page-environment)

A decorator that injects server-generated (e.g. environment variables) values as props to subsequent client-rendered [Next.js](https://github.com/zeit/next.js) pages

## Summary

When developing Next.js apps it can be useful for server-generated values (e.g. environment variables) to be shared across both server and client-rendered pages. A common approach is to use babel to render the values statically at build time (see [the official Next.js example with universal configuration](https://github.com/zeit/next.js/tree/master/examples/with-universal-configuration)). This library exposes a page decorator that takes in arbitrary values on server-rendered pages and injects them into subsequent client-rendered pages as props while avoiding customizing transpilation.

## Usage

1. Install into your Next.js app

    ```
    yarn add next-page-environment
    ```

1. Create your own page decorator

    Configure decorator and export it, you'll use this to wrap all your pages:

    ```
    // decorators/Page.js
    import PageEnvironment from 'next-page-environment'

    export default PageEnvironment({
      foo: process.env.APP_FOO
    })
    ```

1. Wrap pages with your decorator

    Wrap pages in your app with your page decorator, e.g.:

    ```
    // pages/index.js
    import Page from '../decorators/Page'

    const Index = ({ env: { foo } }) => <div>foo: { foo }</div>
    export default Page(Index)
    ```

## Run app

1. Start the app

    ```
    APP_FOO=bar yarn dev
    ```
