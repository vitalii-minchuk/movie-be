import express from "express"
import cors from "cors"
import logger from "morgan"
import streamRouter from "./modules/stream/stream.controller"

const app = express()
const PORT = 4004

app.use(cors())
app.use(express.json())
app.use(logger("dev"))

app.use(streamRouter)

app.listen(PORT, () => {
  console.log(`app is running at port: ${PORT}`)
})
