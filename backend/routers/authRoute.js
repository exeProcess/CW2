const authRouter = require("express").Router()
const User = require("../models/User")

authRouter.post("/register", async (req, res) => {
    const UserInfo = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await UserInfo.save()
        const { password, ...others} = savedUser._doc
        res.status(201).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = authRouter