import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
    } catch (e) {
        console.log(e)
    }
}

export default connectDb