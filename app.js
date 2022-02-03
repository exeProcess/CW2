const express = require("express")
const app = express()
const mongoClient = require("mongodb").MongoClient
const morgan = require("morgan")
const dotenv = require("dotenv")
//const cors = require("cors")
const route = require("./backend/routers/router");
const userRoute = require("./backend/routers/userRoute")
//const authRoute = require("./routers/authRoute")
const lessonRouter = require("./backend/routers/lessonRoute")
let db;
dotenv.config()


// this piece of code connects the application to the database
mongoClient.connect(process.env.DB_URL,(error, database) => {
    db = database.db("Webstore")
    console.log("database connected");
})



app.use((req, res ,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Header", "*")
    next()
})
app.param("collectionName", (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName)
    return next()
})
app.get("/",(req, res) => {
    res.send("welcome to after school backend")
})
app.get("/collection/:collectionName", (req, res) => {
    req.collection.find({}).toArray((error, result) => {
        if(error) return next(error)

        res.send(result)
    })
})
////////////////////
app.use(express.json())
app.use(morgan("common"))
//app.use(cors())
//invoking the use property to register middleware on express server
//app.use("/", route)
app.use("/", userRoute)
//app.use("/", authRoute)
app.use("/", lessonRouter)
let port = process.env.PORT || 9000
app.listen(port, () => {
    console.log("app running")
})
