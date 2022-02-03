const cartRouter = require("express").Router()

cartRouter.get("/cartItems", async(req, res) => {
    try {
        const cartItems = await Cart.find()
        res.status(200).json(cartItems)
    } catch (error) {
        res.status(201).json(error)
    }
})
cartRouter.post("/insertCartItem", async (req, res) => {
    const cartItem = new Cart({
        title: req.body.title,
        price: req.body.price,
        quantity: req.body.quantity
    })
    try {
        const insertCartItem = await cartItem.save()
        res.status(200).json(insertCartItem) 
    } catch (error) {
        res.status(201).json(error)
    }
})