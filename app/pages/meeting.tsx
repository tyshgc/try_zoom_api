import { InferGetServerSidePropsType } from "blitz"
import dynamic from "next/dynamic"
import { generateSignature } from "utils/credentials"
import Layout from "app/layouts/Layout"
const ZoomMeeting = dynamic(() => import("app/components/ZoomMeeting"), { ssr: false })

function Meeting({ signature }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ position: "relative" }}>
      <h1>Meeting</h1>
      <ZoomMeeting {...{ signature }} />
    </div>
  )
}

const Page = ({ signature }) => {
  return (
    <Layout title="meeting">
      <Meeting {...{ signature }} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const signature = generateSignature(process.env.ZOOM_APIKEY, process.env.ZOOM_APISECRET, 1, 0)

  return {
    props: {
      signature,
    },
  }
}

export default Page
