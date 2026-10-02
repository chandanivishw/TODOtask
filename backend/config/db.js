import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/merntodo");
        console.log("MongoDB connected successfully");


    }catch(error){
        console.log("MongoDB connection failed:", error);
    }
}
export default connectDB;