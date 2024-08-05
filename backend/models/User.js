import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    //nome -> stringa
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    validated: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users" }
);
export default mongoose.model("User", userSchema);
