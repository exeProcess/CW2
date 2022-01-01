const router = require("express").Router()

router.get("/testRoute", (req, res) => {
    res.send("route working")
})

module.exports = router