"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderModel =
  exports.FOOD_ORDER_SCHEMA =
  exports.FoodOrderItems =
    void 0;
const foods_1 = require("./foods");
const mongoose = require("mongoose");
exports.FoodOrderItems = new mongoose.Schema({
  food: foods_1.FOOD_SCHEMA,
  quantity: Number,
});
exports.FOOD_ORDER_SCHEMA = new mongoose.Schema(
  {
    user: String,
    email: String,
    address: String,
    totalPrice: Number,
    foodOrderItems: [exports.FoodOrderItems],
    isVerified: Boolean,
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
exports.FoodOrderModel =
  mongoose.models["Food-Order"] ||
  mongoose.model("Food-Order", exports.FOOD_ORDER_SCHEMA, "food-order");
