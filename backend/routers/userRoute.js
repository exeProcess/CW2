const userRouter = require("express").Router()



userRouter.post("/register", async (req, res) => {
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
userRouter.get("/user", async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = userRouter