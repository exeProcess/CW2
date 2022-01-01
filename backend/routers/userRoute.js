const userRouter = require("express").Router()

userRouter.get("/user", (req, res) => {
    const user = {
        "email": "group8@lab-work.com",
        "password": "password"
    }
    res.send(user)
})



module.exports = userRouter