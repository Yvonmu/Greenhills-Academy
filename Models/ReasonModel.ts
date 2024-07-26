import mongoose from 'mongoose';

const ReasonToJoinModelSchema = new mongoose.Schema(
  {
    title: { type: String, required:true },
    content: { type: String , required: true},
    imageUrl: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.ReasonToJoinModel || mongoose.model('ReasonToJoinModel', ReasonToJoinModelSchema);
