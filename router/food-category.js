"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_category_1 = require("../models/food-category");
exports.FoodCategoryRouter = express_1.default.Router();
exports.FoodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const FoodCategories = yield food_category_1.FoodCategoryModel.find();
        res.json(FoodCategories);
    }
    catch (_a) {
        res.json({ status: "can not access" });
    }
}));
exports.FoodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryName } = req.body;
    try {
        const foodCategory = yield food_category_1.FoodCategoryModel.create({ categoryName });
        res.json(foodCategory);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
exports.FoodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { categoryName } = req.body;
    const updatedCategory = yield food_category_1.FoodCategoryModel.findByIdAndUpdate(id, { categoryName }, { new: true });
    res.json(updatedCategory);
}));
exports.FoodCategoryRouter.delete("/food-category/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield food_category_1.FoodCategoryModel.findByIdAndDelete(id);
    res.send(id);
}));
