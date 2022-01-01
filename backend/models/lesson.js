const mongoose = require("mongoose")

const LessonSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    location: {
        type: "String",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    availableInventory: {
        type: "Number",
        required: true
    }
},{
    timestamp: true
})

module.exports = mongoose.model("lesson",LessonSchema)