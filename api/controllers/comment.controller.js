import Comment from '../models/comment.model.js';
import Blog from '../models/blog.model.js';

export const addComment = async (req, res) => {
  try {
    const blogId =req.params.id;
    const { commenterName, comment } = req.body;

    const blog = await Blog.findById(blogId)

    const newComment = new Comment({
        blog:blogId,
        commenterName,
        comment,
    });
    await newComment.save();

    if (!Array.isArray(blog.comments)) {
        blog.comments = [];
    }

   
    blog.comments.push(newComment._id);
    await blog.save();
    
    // await Blog.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//to get comments

export const getCommentsByPost = async (req, res) => {
    try {
        const { postId, commenterName, comment } = req.params;
        const comments = await Comment.find({ postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
