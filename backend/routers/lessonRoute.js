const Lesson = require("../models/lesson");

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
   /* try {
        const lessons = await Lesson.find()
        res.status(201).json(lessons)
    } catch (error) {
        res.status(500).json(error)
    }*/
    const lesson = [
        {
            "topic": "maths",
            "location": "dubai",
            "price": 100

        },
        {
            "topic": "maths",
            "location": "London",
            "price": 80

        },
        {
            "topic": "maths",
            "location": "Liverpool",
            "price": 90

        },
        {
            "topic": "maths",
            "location": "Oxford",
            "price": 120

        }
    ]

    res.send(lesson)
})

module.exports = lessonRouter