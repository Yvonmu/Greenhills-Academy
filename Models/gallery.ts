import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    imageUrls: {
      type: [String], // Array of strings
      required: true, // This field is required
    },
  },
  { timestamps: true }
);

export default mongoose.models.gallery || mongoose.model('gallery', gallerySchema);
