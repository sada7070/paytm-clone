import mongoose, { model, Schema } from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING!);

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  password: String,
});

export const userModel = model("User", userSchema);

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: { type: Number, required: true },
});

export const accountModel = model("Account", accountSchema);  