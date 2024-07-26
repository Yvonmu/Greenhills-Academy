import mongoose from 'mongoose';

const sponsorshipImagesSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: [String], // Array of strings
      required: true, // This field is required
    },
  },
  { timestamps: true }
);

export default mongoose.models.sponsorshipImages || mongoose.model('sponsorshipImages', sponsorshipImagesSchema);
