// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break;
  

    case 'POST':
      res.status(200).json({name: 'Success'})
      break;
    default:
      console.error('Incorrect HTTP Verb')
      res.status(400).end()
      break;
  }
}
