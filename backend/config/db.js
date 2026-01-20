import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohith:998919@cluster0.aoqgmlk.mongodb.net/INVOICE')
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
    
};
