import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env.local");

// eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((conn) => {
      return conn;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
