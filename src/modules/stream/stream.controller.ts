import { Request, Router, Response } from 'express'

const router = Router()

router.get("/steam", (req: Request, res: Response) => {
  res.status(200).send('<h1>hello world</h1>')
})

export default router