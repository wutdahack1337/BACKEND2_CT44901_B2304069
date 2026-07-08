import mongoose from "mongoose";

const contactSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        email:{
            type: String,
            trim: true,
        },
        address:{
            type: String,
            trim: true,
        },
        phone:{
            type: String,
            trim: true,
            required: true,
        },
        favorite: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true, // createAt and updateAt
    }
);

export default mongoose.model("Contact", contactSchema);