import mongoose from "mongoose";

const DocDataSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    doc: { type: String, required: true, },

  },
  { timestamps: true }
);

export default mongoose.models.DocData || mongoose.model("DocData", DocDataSchema);
