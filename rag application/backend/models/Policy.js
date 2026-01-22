import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    text: String,
    embedding: [Number]
}, {versionKey:false})

const PolicyModel = mongoose.model("Policy", policySchema)

export default PolicyModel;