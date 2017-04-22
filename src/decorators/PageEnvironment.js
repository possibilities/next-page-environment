import { Component, createElement } from 'react'
import PageDecoratorInvariant from 'next-page-decorator-invariant'

const pageDecoratorInvariant = PageDecoratorInvariant('PageEnvironment')

const PageEnvironment = env => Page => {
  const WrappedPage = pageDecoratorInvariant(Page)

  return class PageWrapper extends Component {
    static async getInitialProps (pageContext) {
      if (process.browser) {
        env = window.__nextPageEnv
      }

      const pageProps = WrappedPage.getInitialProps
        ? await WrappedPage.getInitialProps({ ...pageContext, env })
        : {}

      return { ...pageProps, env }
    }

    constructor (props) {
      super(props)
      if (process.browser) {
        window.__nextPageEnv = props.env
      }
    }

    render () {
      return createElement(WrappedPage, this.props)
    }
  }
}

export default PageEnvironment
