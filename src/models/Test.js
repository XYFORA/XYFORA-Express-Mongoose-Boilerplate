import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
    {
        data: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Test", TestSchema);