import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
//   postId:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Blog',
//     required: true
//     },
  commenterName:{
    type: String,
    required: true
    },
  comment:{
    type: String,
    required: true
    },
  timestamp:{
    type: Date,
    default: Date.now
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
