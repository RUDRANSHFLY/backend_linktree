import mongoose from "mongoose";

const referSchema = new mongoose.Schema({
    refererdByUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    referredUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dateReferred: {
        type: Date,
        default: Date.now(),
    },
    sucessDate: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ["pending", "success"],
        default: "pending"
    }
});

const Referral = mongoose.model("Referral",referSchema)

export default Referral;