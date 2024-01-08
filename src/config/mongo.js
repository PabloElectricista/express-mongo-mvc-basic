import "dotenv/config";
import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV;

async function connectToMongo() {
  const MONGO_URL = process.env.MONGO_URL;
  await connect(MONGO_URL);
}

export default connectToMongo;
