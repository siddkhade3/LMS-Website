import mongoose from "mongoose";


const connectDb = async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected succesfully");
    }catch(err){
        console.log("Error occured",err);
    }
}

export default connectDb;