const route = require("express").Router()

route.get("/", (req, res) => {
    res.send("route working");
})

module.exports = route