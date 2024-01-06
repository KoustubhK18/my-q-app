import mongoose from "mongoose"

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on('connect',()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on('error',(error)=>{
            console.log("MongoDB connection error");
            console.log(error);
        });
    } catch (error) {
        console.log("Something went wrong while connecting to Database!");
        console.error(error);
    }
}