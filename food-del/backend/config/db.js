import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://muktijindal5:Muktijindal@cluster0.2l1vqbd.mongodb.net//food-del').then(()=>console.log("DB Connected"))
}


