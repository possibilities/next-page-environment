import PageEnvironment from 'next-page-environment'

// Note: Normall you only use one decorator in an app but for here we
// use two as a regression test.

const pageEnvironment1 = PageEnvironment({
  foo: process.env.FOO
})

const pageEnvironment2 = PageEnvironment({
  bar: process.env.BAR
})

// Note: Normally we'd put this with other global decorators but for
// the demo we simply pass it through.
export default Page => pageEnvironment1(pageEnvironment2(Page))
