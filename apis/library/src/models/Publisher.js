
import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    founded: { type: Number, required: true },
    countryOfOrigin: { type: String }
  },
  {
    versionKey: false
  }
)

const publisher = mongoose.model('publishers', publisherSchema);

export default publisher;
