import mongoose from "mongoose";


export const connectDB=async() => {
    await mongoose.connect('mongodb+srv://GreatStack:GreatStack1212@cluster0.rq6kx.mongodb.net/FOOD-APP').then(()=> console.log("DB Connected"))
}