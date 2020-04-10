const mongoose = require('mongoose')
const {Schema} = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  minDays: {
    type: Number,
    default: false,
    required: true,
  },
  maxDays: {
    type: Number,
    default: false,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  pros: String,
  cons: String,
  createdDate: {
    type: String,
    default: Date.now()
  }
})

const Tasks = mongoose.model('tasks', taskSchema)

module.exports = Tasks;