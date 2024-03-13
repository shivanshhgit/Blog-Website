import mongoose from 'mongoose';
const Connection = async () => {
    try{
        const URL = `mongodb+srv://mern-blog:blogHCI@mern-blog.kqrfaod.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`;
        await mongoose.connect(URL,{ useNewUrlParser :true});
        console.log('Database connected successfully');
    }
    catch(error){
        console.log("Database connection unsuccessful",error);
    }
}

export default Connection;