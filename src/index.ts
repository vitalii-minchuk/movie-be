import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import mongoose from 'mongoose'
// routes
import streamRouter from './modules/stream/stream.controller'
import contentRouter from './modules/content/content.controller'
import moviesRouter from './modules/movies/movies.controller'

import 'dotenv/config'

mongoose.set('strictQuery', false)

try {
  mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log('Database connected')
  })
} catch (error) {
  console.warn('Connection to mongo failed', error)
  throw error
}
// middleware
const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

// endpoints
app.use('/stream', streamRouter)
app.use('/content', contentRouter)
app.use('/movies', moviesRouter)

const PORT = process.env.PORT || 4004

app.listen(PORT, () => {
  console.log('server is running...')
  console.log(`http://localhost:${PORT}`)
})
