import "dotenv/config";
import app from './app.js'
import connectToMongo from './config/mongo.js';

app.listen(process.env.PORT || 0, async function() {
  console.log(`server running on http://localhost:${this.address().port}`)
  try {
    await connectToMongo();
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
});
