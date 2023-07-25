import mongoose from "mongoose";

export const connectDb = () => {
    mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => console.log("Database connected"))
        .catch((e) => console.log("Database connection error ", e));

}