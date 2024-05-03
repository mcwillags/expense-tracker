const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()
const appRoutes = require('./routes/transactions.js')

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({origin: "*"}))

//routes
app.use("/app", appRoutes)


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

<<<<<<< HEAD
server() 
=======
server()
>>>>>>> 37a0fb5297e1e986101056135ef083542783401e
