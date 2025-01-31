import { timeStamp } from "console";
import { ObjectId } from "mongodb";
import { Mongoose } from "mongoose";

const mongoose = require("mongoose");
// const UserRoleEnum = new mongoose.Schema({
//   USER: {

//   };
export const USER_SCHEMA = new mongoose.Schema(
  {
    email: String,
    password: { type: String, default: "deez" },
    phoneNumber: { type: Number, default: 99999999 },
    address: { type: String, default: "deez" },
    //   role: UserRoleEnum,
    orderedFoods: { type: mongoose.Schema.Types.ObjectId },

    isVerified: { type: Boolean, default: false },
  },
  {
    timeStamp: true,
  }
);
export const UserModel =
  mongoose.models["Users"] || mongoose.model("User", USER_SCHEMA, "users");
