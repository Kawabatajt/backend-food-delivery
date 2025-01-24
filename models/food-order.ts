import { triggerAsyncId } from "async_hooks";
import { ObjectId, Timestamp } from "mongodb";

const mongoose = require("mongoose");

export const FoodOrderItem = new mongoose.Schema({
  food: ObjectId,
  quantity: Number,
});

export const FOOD_ORDER_SCHEMA = new mongoose.Schema(
  {
    user: ObjectId,
    totalPrice: Number,
    FoodOrderItems: [FoodOrderItem],
    isVerified: Boolean,
    status: {
      type: String,
      enum: ["PENDING,CANCELED,DELIVERED"],
      default: "PENDING",
    },
  },
  { Timestamp: true }
);
export const UserModel =
  mongoose.models["Food-Order"] ||
  mongoose.model("Food-Order", FOOD_ORDER_SCHEMA, "food-order");
