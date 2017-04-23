import { Component, createElement } from 'react'
import PageDecoratorInvariant from 'next-page-decorator-invariant'

let cachedEnv = {}

const pageDecoratorInvariant = PageDecoratorInvariant('PageEnvironment')

const PageEnvironment = env => Page => {
  // Assert this decorator is only used on pages
  const WrappedPage = pageDecoratorInvariant(Page)

  return class PageWrapper extends Component {
    static async getInitialProps (pageContext) {
      // Pass down accumulated environment to wrapped components
      const pageContextEnv = { ...env, ...cachedEnv }
      const pageProps = WrappedPage.getInitialProps
        ? await WrappedPage.getInitialProps({
          ...pageContext,
          env: pageContextEnv
        })
        : {}

      // Pass down environment as a prop
      const pageEnv = { ...pageProps.env, ...env, ...cachedEnv }
      return { ...pageProps, env: pageEnv }
    }

    constructor (props) {
      super(props)

      // Update cache
      if (process.browser) {
        cachedEnv = { ...cachedEnv, ...props.env }
      }
    }

    render () {
      // Render page with environment injected as props
      return createElement(WrappedPage, this.props)
    }
  }
}

export default PageEnvironment
