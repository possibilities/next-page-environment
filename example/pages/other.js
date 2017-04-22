import Link from 'next/link'
import Page from '../decorators/Page'

const Other = ({ env: { foo } }) => (
  <div>
    <h1>other</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/other'><a>other</a></Link></div>
    <br />
    <div>foo: {foo}</div>
  </div>
)

Other.getInitialProps = async ({ env: { foo } }) => {
  console.log('Other page, foo', foo)
}

export default Page(Other)
