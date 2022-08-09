import mongoose from "mongoose"

mongoose.connect(
  // 'mongodb+srv://<MONGOOSE_SERVER>'
);

let db = mongoose.connection;

export default db;
