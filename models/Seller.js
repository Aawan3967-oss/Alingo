import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shopName: String,
  commission: { type: Number, default: 2.5 },
  isApproved: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Seller", SellerSchema);
