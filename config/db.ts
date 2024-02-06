import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    let mongoUri = process.env.DB_URI!;
    await mongoose.connect(mongoUri);
    console.log("db connected");
  } catch (error) {
    console.log("db error", { error });
  }
};

export default connectDatabase;
