const mongoose = require("mongoose");

export const FOOD_SCHEMA = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: mongoose.Schema.Types.ObjectId,
});
export const FoodModel =
  mongoose.models["Food"] || mongoose.model("Food", FOOD_SCHEMA, "food");
