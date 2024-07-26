import mongoose, { Schema } from "mongoose";

const navigationLogoDataSchema =  new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    layoutSection: {
      type: String,
    },
    url: {
      type: String,
    },
    image: {
      type: [String],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.navigationLogoData ||
  mongoose.model("navigationLogoData", navigationLogoDataSchema);
