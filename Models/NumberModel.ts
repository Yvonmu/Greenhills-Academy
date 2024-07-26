// models/NumberModel.ts

import mongoose from 'mongoose';

const NumberSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        number: { type: Number, required: true },
        iconUrl: { type: String, default: null }
    },
    { timestamps: true }
);

export default mongoose.models.Numbers || mongoose.model('Numbers', NumberSchema);
