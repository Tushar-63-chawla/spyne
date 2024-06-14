const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  hashtags: [{
    type: String,
    required: true
  }],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      email: {
        type: String
      },

      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = Discussion = mongoose.model('discussion', DiscussionSchema);