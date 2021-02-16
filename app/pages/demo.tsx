import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"

const Demo: BlitzPage = () => {
  return <div>demo</div>
}

Demo.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Demo
