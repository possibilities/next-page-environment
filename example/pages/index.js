import Link from 'next/link'
import Page from '../decorators/Page'

const Index = ({ env: { foo } }) => (
  <div>
    <h1>home</h1>
    <div><Link href='/'><a>home</a></Link> | <Link href='/other'><a>other</a></Link></div>
    <br />
    <div>foo: {foo}</div>
  </div>
)

Index.getInitialProps = async ({ env: { foo } }) => {
  console.log('Index page, foo', foo)
}

export default Page(Index)
