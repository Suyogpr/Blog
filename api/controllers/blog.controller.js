import Blog from "../models/blog.model.js";

const getBlogs = async(req,res) =>{
    try{
        const blogs = await Blog.find({}).populate({
            path: 'comments',
            select: 'commenterName comment ' // Fields to include from Comment
          
        });
        res.status(200).json(blogs)
    }catch(error){
        res.status(500).json({message:error.message})
    }}

const getBlog = async(req,res) =>{
    try{
        const {id} = req.params;
       const newBlog = await Blog.findById(id).populate({
        path: 'comments',
        select: 'commenterName comment ' // Fields to include from Comment
      
    });
       res.status(200).json(newBlog)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getBlogsByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const blogs = await Blog.find({ categories: category });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const createBlog = async (req,res) =>{
    try{
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    };

const updateBlog = async (req,res) =>{
    try{
        const {id} =req.params //for id
        const blog = await Blog.findByIdAndUpdate(id,req.body);

        if(!blog){
            return res.status(404).json({message:"Blog not found"})
        }

        const updatedBlog = await Blog.findById(id);
        res.status(200).json(updatedBlog)
            
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteBlog = async (req,res) =>{
    try{
        const {id} =req.params //for id
        const blog = await Blog.findByIdAndDelete(id,req.body);

        if(!blog){
            return res.status(404).json({message:"Blog not found"})
        }

        const updatedBlog = await Blog.findById(id);
        res.status(200).json({message:"Blog deleted successfully"})
            
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

    export {
        getBlogs,
        getBlog,
        createBlog,
        updateBlog,
        deleteBlog,
        getBlogsByCategory,
    };