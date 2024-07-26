import mongoose, { Schema } from "mongoose";

const CreativeDataSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
    },
    layoutSection: {
      type: String,
    },
    iconUrl:String,
    image: {
      type: [String],
    },
    description: {
      type: String,
    },
    doc: {
      type: String,
    },
    docTitle: String,
    docUrl: String,
    headerTitle: String,
    headerDescription: String,
    backgroundImage: { type: [String] },
    backgroundVideo: String,
    backgroundImageTitle: String,
    backgroundImageButton: String,
    backgroundImageUrl: String,
    leadershipId: {
      type: String,
      default: null,
    },
    reasonjoinId: {
      type: String,
      default: null,
    },
    missionId: {
      type: String,
      default: null,
    },
    numbersId: {
      type: String,
      default: null,
    },
    newsId: {
      type: String,
      default: null,
    },
    schoolcardId: {
      type: String,
      default: null,
    },
    aboutcardId: {
      type: String,
      default: null,
    },
    boardingcardId: {
      type: String,
      default: null,
    },
    universitiesId: {
      type: String,
      default: null,
    },
    selectedCategory: {
      type: String, default: null,
    },
    otherTitle: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CreativeData ||
  mongoose.model("CreativeData", CreativeDataSchema);
