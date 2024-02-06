import mongoose from "mongoose";

const connectDatabase = async () => {
  let connectDB = await mongoose.connect(process.env.DB_URI!);
  console.log(`MongoDB Connected: ${connectDB.connection.host}`);
};

export default connectDatabase;
