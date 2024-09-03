// import User from '../models/user.model.js';
import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create = async (req, res, next) => {

    if (!req.body.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'))
    }

    if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Please provide all fields'))
    }

    const slug = req.body.title
    .split('')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '-');
    const newPost = new Post({
        ...req.body,
        slug,
        userId: req.user.id,
    });
    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost)
    }catch(error){
        next(error)
    }
} ;

// const getUserPosts = async (req, res) => {
//     try {
//       const posts = await BlogPost.find({ author: req.params.userId });
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };