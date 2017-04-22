import PageEnvironment from 'next-page-environment'

// Normally we'd put this with other global decorators but for the demo
// we simply pass it through.
export default PageEnvironment({
  foo: process.env.FOO
})
