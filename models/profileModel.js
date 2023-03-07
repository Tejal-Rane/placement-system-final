import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    photourl: {
      type: String,
    },
    resume: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      default: Date.now,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    placed: {
      type: Boolean,
      default: false,
    },
    placedData: {
      type: Array,
    },
    class10th: { type: Number, required: true },
    class12th: { type: Number, required: true },
    branch: { type: String, required: true },
    division: { type: String, required: true },
    percent: { type: Number, required: true },
    Aggrpercent: { type: Number, required: true },
    liveKt: { type: String, required: true },
  },
  
  { timestamps: true }
);

export default mongoose.model("profile-details", profileSchema);
