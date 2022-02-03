
const lessonRouter = require("express").Router()



lessonRouter.post("/lesson", async (req, res) => {
    const lesson = new Lesson({
        title: req.body.title,
        price: req.body.price,
        location: req.body.location,
        availableInventory: req.body.spaces
    })

    try {
        const savedLesson = await lesson.save()
        res.status(201).json(savedLesson)
    } catch (error) {
        res.status(500).json(error)
    }
})

lessonRouter.get("/lesson", async (req, res) => {
    try {
        const lessons = await Lesson.find()
        res.status(201).json(lessons)
    } catch (error) {
        res.status(500).json(error)
    }
})

lessonRouter.put("/editLessonSpace", async (req, res) => {
    
})

module.exports = lessonRouter