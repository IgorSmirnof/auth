const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const BD ='mongodb://127.0.0.1:27017/mestodb'
// const BD ='mongodb+srv://admin:TAExRrOzmU3IqNeS@cluster0.aehzmda.mongodb.net/auth_roles?retryWrites=true&w=majority&appName=Cluster0'
// const BD_UNI = 'mongodb+srv://qwerty:qwerty123@cluster0.b6pb9.mongodb.net/auth_roles?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(BD)
        app.listen(PORT, () => console.log(`server started on port ${PORT} success`))
    } catch (e) {
        console.log(e)
    }
}

start()

