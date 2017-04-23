import Link from 'next/link'
import Page from '../decorators/Page'

const Other = ({ env: { foo, bar } }) => (
  <div>
    <h1>other</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/other'><a>other</a></Link></div>
    <br />
    <div>foo: {foo}</div>
    <div>bar: {bar}</div>
  </div>
)

Other.getInitialProps = async ({ env: { foo, bar } }) => {
  console.log('Other page, foo', foo)
  console.log('Other page, bar', bar)
}

export default Page(Other)
