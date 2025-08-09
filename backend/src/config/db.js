import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('Connected to DB SUCCESSFULLY ✅');
  } catch (error) {
    console.log('MongoDB connection error:', error);
    process.exit(1);
  }
};
