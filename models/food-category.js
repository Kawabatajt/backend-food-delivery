"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryModel = exports.FOOD_CATEGORY_SCHEMA = void 0;
const mongoose = require("mongoose");
exports.FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
    categoryName: String,
}, {
    Timestamp: true,
});
exports.FoodCategoryModel = mongoose.model("FoodCategory", exports.FOOD_CATEGORY_SCHEMA, "food-category");
