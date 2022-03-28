import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './Routes/posts.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.json())

app.use('/posts', postRoutes);

const uri = process.env.ATLAS_URI
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDb database connection established successfully!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})