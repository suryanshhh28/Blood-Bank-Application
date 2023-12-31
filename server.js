const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")

dotenv.config();

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test', require('./routes/testRoutes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`NODE SERVER RUNNING in ${process.env.DEV_MODE} ON ${process.env.PORT}`.bgBlue.white)
})