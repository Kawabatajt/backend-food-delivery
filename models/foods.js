"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = exports.FOOD_SCHEMA = void 0;
const mongoose = require("mongoose");
exports.FOOD_SCHEMA = new mongoose.Schema({
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: mongoose.Schema.Types.ObjectId,
});
exports.FoodModel = mongoose.models["Food"] || mongoose.model("Food", exports.FOOD_SCHEMA, "food");
