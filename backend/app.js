const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const dotenv = require("dotenv")
//const cors = require("cors")
const route = require("./routers/router");
const user = require("./models/User")
const userRoute = require("./routers/userRoute")
const authRoute = require("./routers/authRoute")
const lessonRouter = require("./routers/lessonRoute")

dotenv.config()


// this piece of code connects the application to the database
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connected")
}).catch(err => {
    console.log(err)
})
////////////////////
app.use(express.json())
app.use(morgan("common"))
//app.use(cors())
//invoking the use property to register middleware on express server
app.use("/", route)
app.use("/", userRoute)
app.use("/", authRoute)
app.use("/", lessonRouter)
let port = process.env.PORT || 9000
app.listen(port, () => {
    console.log("app running")
})
