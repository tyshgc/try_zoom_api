import { useLayoutEffect } from "react"
import { ZoomMtg } from "@zoomus/websdk"

type Props = {
  signature: string
}

export default function ZoomMeeting({ signature }: Props) {
  console.log(`signature`, signature)

  useLayoutEffect(() => {
    ZoomMtg.preLoadWasm()
    ZoomMtg.prepareJssdk()
  }, [])

  return <></>
}
