import { Component, createElement } from 'react'
import PageDecoratorInvariant from 'next-page-decorator-invariant'

window.__nextPageEnv = window.__nextPageEnv || {}

const pageDecoratorInvariant = PageDecoratorInvariant('PageEnvironment')

const PageEnvironment = env => Page => {
  // Assert this decorator is only used on pages
  const WrappedPage = pageDecoratorInvariant(Page)

  return class PageWrapper extends Component {
    static async getInitialProps (pageContext) {
      if (process.browser) {
        // Always restore from cache on client
        env = window.__nextPageEnv
      }

      const pageProps = WrappedPage.getInitialProps
        // Pass down environment to wrapped components
        ? await WrappedPage.getInitialProps({ ...pageContext, env })
        : {}

      // Pass down environment as a prop
      return { ...pageProps, env }
    }

    constructor (props) {
      super(props)
      if (process.browser) {
        // Merge into existing cache of page env values
        window.__nextPageEnv = {
          ...window.__nextPageEnv,
          ...props.env
        }
      }
    }

    render () {
      // Render page with environment injected as props
      return createElement(WrappedPage, this.props)
    }
  }
}

export default PageEnvironment
