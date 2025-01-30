import { triggerAsyncId } from "async_hooks";
import { ObjectId, Timestamp } from "mongodb";

const mongoose = require("mongoose");

export const FoodOrderItems = new mongoose.Schema({
  food: mongoose.Schema.Types.ObjectId,
  quantity: Number,
});

export const FOOD_ORDER_SCHEMA = new mongoose.Schema(
  {
    user: String,
    address: String,
    totalPrice: Number,
    foodOrderItems: [FoodOrderItems],
    isVerified: Boolean,
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const FoodOrderModel =
  mongoose.models["Food-Order"] ||
  mongoose.model("Food-Order", FOOD_ORDER_SCHEMA, "food-order");
