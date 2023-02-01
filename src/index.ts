import express from 'express'
import cors from 'cors'
import logger from 'morgan'

// routes
import streamRouter from './modules/stream/stream.controller'

import 'dotenv/config'

// middleware
const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// endpoints
app.use('/stream', streamRouter)

const PORT = process.env.PORT || 4004

app.listen(PORT, () => {
  console.log('server is running...')
  console.log(`http://localhost:${PORT}`)
})
