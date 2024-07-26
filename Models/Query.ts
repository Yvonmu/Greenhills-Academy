import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    replied: { type: Boolean, default: false },
    replyText:{ type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.Query || mongoose.model('Query', QuerySchema);
