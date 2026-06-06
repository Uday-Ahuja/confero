import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subject: { type: String, required: true },
    semester: { type: Number, required: true },
    branch: { type: String, required: true },
    description: { type: String },
    driveLink: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        value: { type: Number, min: 1, max: 5 },
      },
    ],
    averageRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Resource", resourceSchema);