import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    imageUrl: { type: [String], required: true },
    videoUrl: String,
    description: { type: String, required: true },
    type: { type: String, default: "news" },
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model("News", NewsSchema);
