import mongoose from "mongoose";

export const connectDB = async (): Promise<typeof mongoose> => {
  if (mongoose.connection.readyState >= 1) return mongoose;
  return mongoose.connect(process.env.MONGODB_URI as string);
};
