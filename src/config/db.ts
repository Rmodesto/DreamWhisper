import dotenv from "dotenv";
import { connect, Mongoose } from "mongoose";
dotenv.config();

export async function connectDB(): Promise<Mongoose | void> {
  try {
    const connection = await connect(process.env.MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB Atlas");
    return connection;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB Atlas:", error.message);
    }
    process.exit(1);
  }
}
