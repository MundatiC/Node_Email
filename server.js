const express = require('express')
require('dotenv').config()

const sendEmail = require('./sendEmail')

const app = express();

app.use(express.json());

try {
    sendEmail()
    
} catch (error) {
    console.log(error)
}


const port = process.env.PORT || 4000;



app.listen(port, () => console.log(`Server on port: ${port}`))
