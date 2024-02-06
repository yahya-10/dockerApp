import { Schema, model } from "mongoose";

// Interface
interface UserInterface {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: false },
});

const User = model<UserInterface>("User", userSchema);
export default User;
