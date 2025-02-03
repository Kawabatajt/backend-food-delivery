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
exports.FoodsRouter = void 0;
const express_1 = __importDefault(require("express"));
const foods_1 = require("../models/foods");
exports.FoodsRouter = express_1.default.Router();
exports.FoodsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const filter = id ? { category: id } : {};
        const Foods = yield foods_1.FoodModel.find(filter);
        res.json(Foods);
    }
    catch (_a) {
        res.json({ status: "Dont have access" });
    }
}));
exports.FoodsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { foodName, price, image, ingredients, category } = req.body;
    try {
        const foodModel = yield foods_1.FoodModel.create({
            foodName,
            price,
            image,
            ingredients,
            category,
        });
        res.json(foodModel);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}));
exports.FoodsRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const body = req.body;
    const updatedFood = yield foods_1.FoodModel.findByIdAndUpdate(id, body);
    res.json(updatedFood);
}));
exports.FoodsRouter.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const updatedFood = yield foods_1.FoodModel.findByIdAndDelete(id);
    res.json(updatedFood);
}));
