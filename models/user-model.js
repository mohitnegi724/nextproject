const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String,
    email: String,
    profilePicture: String,
    joinedDate: {
      type: String,
      default: Date.now()
    },
    tasks: {
        todo:{
            type: Array,
            default: []
        },
        completedTasks: {
            type: Array,
            default: []
        },
        priorityTasks: {
            type: Array,
            default: []
        }
    },
    score:  {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;