import mongoose from 'mongoose';

const AlumniCardSchema = new mongoose.Schema(
    {
        slug: { type: String, unique: true, required: true },
        description: { type: String },
        docTitle: { type: String },
        docUrl: { type: String },
        doc: { type: String },
    },
    { timestamps: true }
);

export default mongoose.models.AlumniCard || mongoose.model('AlumniCard', AlumniCardSchema);
