import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jdfile: {
      type: String,
      required: true,
    },
    branchcriteria: {
      type: Array,
      default: [],
    },
    AggrrpercentCriteria: {
      type: Number,
      default: NaN,
    },
    editorData: {
      type: String,
      required: true,
    },
    driveDate: {
      type: Date,
      required: true,
    },
    postedAt: {
      type: Date,
      required: true,
    },
    postedBy: {
      type: String,
      default: "Vaze cell",
    },
  },
  { timestamps: true }
);

export default mongoose.model("placement", placementSchema);
