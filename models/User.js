import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, unique: true },
  role: {
    type: String,
    enum: ["user", "seller", "rider", "admin"],
    default: "user"
  },
  isBlocked: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
