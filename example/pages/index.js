import Link from 'next/link'
import Page from '../decorators/Page'

const Index = ({ env: { foo, bar } }) => (
  <div>
    <h1>home</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/other'><a>other</a></Link></div>
    <br />
    <div>foo: {foo}</div>
    <div>bar: {bar}</div>
  </div>
)

Index.getInitialProps = async ({ env: { foo, bar } }) => {
  console.log('Index page, foo', foo)
  console.log('Index page, bar', bar)
}

export default Page(Index)
