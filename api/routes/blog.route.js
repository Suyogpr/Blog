import express from "express";
import Blog from "../models/blog.model.js";
import {getBlogs, getBlog, getBlogsByCategory, createBlog, updateBlog, deleteBlog} from '../controllers/blog.controller.js'
import { getprofile } from "../controllers/profile.controller.js";


// const {getBlog,getBlogs} = blogController

const router = express.Router();

router.get('/',getBlogs);
router.get('/:id',getBlog);
router.get('/category/:category', getBlogsByCategory);

router.post('/', createBlog);

//update
router.put('/:id',updateBlog);

//delete
router.delete('/:id',deleteBlog);


//userprofile
router.get('/profile/:username',getprofile)


export default router;

