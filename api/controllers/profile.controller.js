import Blog from '../models/blog.model.js';
import User from '../models/user.model.js'; 

export const getprofile = async(req, res) =>{

try{ 
    const {username} = req.params;
    const user = await User.findOne({ username })
    .populate({
      path: 'posts',
      select: 'title content author comments',
    //   populate: {
    //     path: 'comments',
    //     select: 'commenterName comment createdAt'
    //   }
    });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const blogs = await Blog.find({  author: username }).populate({
        path: 'comments',
        select: 'commenterName comment createdAt' // Fields to include from Comment
    });;
    
    res.status(200).json({
        username: user.username,
        profilePicture: user.profilePicture,
        blogs: blogs
      });;
    //   console.log(user)
      console.log(blogs)
}
catch(err){
    return res.status(500).json({message:err.message})
}
};

// module.exports ={
//     getprofile
// }