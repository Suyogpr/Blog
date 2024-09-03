import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import postRoutes from './routes/post.route.js'
import blogRoutes from './routes/blog.route.js'
import commentRoutes from './routes/comment.route.js'
// import Blog from './models/blog.model.js';

//hide mongo credentials
dotenv.config();

//check localhost
const app = express();
const PORT=process.env.PORT||3000

//middleware
app.use(express.json());

//Routes
app.get('/',(req,res) =>{
    res.send("Hello from VsCode")
});

//routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

//Error handling middleware
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

const mongoURI =process.env.MONGO || `mongodb+srv://suyog:suyog@blog.97laatw.mongodb.net/?retryWrites=true&w=majority&appName=Blog`
// console.log("Mongo URI:", mongoURI);

//database connection
mongoose.connect(mongoURI)
.then(() =>{
    console.log(`MongoDB is connected!`);
  // Start server after DB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
})
.catch((err) => {
console.log('Failed to connect to MongoDB', err);
process.exit(1);
});


// //start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}!`)
// });

