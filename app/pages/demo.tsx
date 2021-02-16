import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
const db = process.env.DATABASE_URL
const Demo: BlitzPage = () => {
  return <div>demo, ${db}</div>
}

Demo.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Demo
