// CRUD NodeJS / Rest API
import express from "express";
import db from "./config/dbConnect.js";
// import books from "./models/Book.js";
import routes from "./routes/index.js";

// Mongoose
db.on('error', console.log.bind(console, 'Connection error.'));
db.once('open', () => {
  console.log('Connection successful with Database.');
})

// Express
const app = express();
app.use(express.json());
routes(app);

export default app;
