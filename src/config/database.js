import mongoose from "mongoose";

export const connectDatabase = async (URI) => {
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    mongoose.connection.on("error", (error) => console.log("MongoDB error:", error));
    await mongoose.connect(URI);
};