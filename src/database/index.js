import "dotenv/config";
import { connect } from "mongoose";

await connect(process.env.MONGO_URL);
