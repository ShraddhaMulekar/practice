import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    text: String,
    embedding: [Number]
}, {versionKey:false})

export const PolicyModel = mongoose.model("Policy", policySchema)