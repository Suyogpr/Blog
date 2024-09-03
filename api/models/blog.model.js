import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter title "],
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:String, //mongoose
        required:true, //ref:user
    },
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    categories:
     {
        type:String,
        required:true,
        ref:'Category',
        enum:['Politics','Technology','Motorsport','Football']
    },
    // user:
    // {
    //     type: mongoose.Schema.Types.ObjectId,
    // },
     comments:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' 
    }]
},
{
    timestamps: true,
}
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;