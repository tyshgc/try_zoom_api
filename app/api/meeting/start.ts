import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requests = JSON.stringify(req.query)
  console.log(`request`, requests)
  //res.status(200).json({ name: "John Doe" })
  res.setHeader("content-type", "application/json")
  res.status(200)
  res.end(requests)
}
