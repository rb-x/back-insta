import mongoose from "mongoose";
import chalk from "chalk";

const dbPath = process.env.MONGO_URI;
mongoose.createConnection(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", () => {
  console.log(chalk.red("> error occurred from the database"));
});
db.once("open", () => {
  console.log(
    chalk.blue("> successfully connected to the database [MongoDB Atlas]")
  );
});
export default mongoose;
