import mongoose from "mongoose";
const blogPostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    titolo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
    },
  },
  { collection: "posts" }
);
export default mongoose.model("BlogPost", blogPostSchema);
