"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.USER_SCHEMA = void 0;
const mongoose = require("mongoose");
// const UserRoleEnum = new mongoose.Schema({
//   USER: {
//   };
exports.USER_SCHEMA = new mongoose.Schema({
    email: String,
    password: { type: String, default: "deez" },
    phoneNumber: { type: Number, default: 99999999 },
    address: { type: String, default: "deez" },
    //   role: UserRoleEnum,
    orderedFoods: { type: mongoose.Schema.Types.ObjectId },
    isVerified: { type: Boolean, default: false },
}, {
    timeStamp: true,
});
exports.UserModel = mongoose.models["Users"] || mongoose.model("User", exports.USER_SCHEMA, "users");
