import mongoose from 'mongoose';

const MissionSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: mongoose.Schema.Types.Mixed },
    imageUrl: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.models.Mission || mongoose.model('Mission', MissionSchema);
