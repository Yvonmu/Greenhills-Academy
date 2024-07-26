import mongoose, { Schema } from "mongoose";

const PartnerLogoDataSchema =  new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
    },
    image: {
      type: [String],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.PartnerLogoData ||
  mongoose.model("PartnerLogoData", PartnerLogoDataSchema);
