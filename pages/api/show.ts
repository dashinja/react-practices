import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ answer: 'POST a Question First' })
      break


    case 'POST':
      const body = JSON.parse(req.body)

      const show = {
        isJeopardy () { return /^Jeopardy$/i.test(body.request) },

        isWheelOfFortune () {return /^Wheel of Fortune$/i.test(body.request)},

        isPriceIsRight () {return /^The Price is Right$/i.test(body.request)}
      }

      switch (true) {
        case show.isJeopardy():
          res.send({answer: "Who is Alex Trebecht"})
          break

        case show.isWheelOfFortune():
          res.send({answer: "Who is Pat Sajak"})
          break

        case show.isPriceIsRight():
          res.send({answer: "Who is Bob Barker"})
          break

        default:
          res.send({answer: "Unknown Question"})
          break
      }

      res.end()
      break
    
    // End of HTTP Verbs
    default:
      console.error('Incorrect HTTP Verb')
      res.status(400).end()
      break
  }
}
