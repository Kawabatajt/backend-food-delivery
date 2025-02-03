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
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const food_category_1 = require("./router/food-category");
const food_1 = require("./router/food");
const food_order_1 = require("./router/food-order");
const user_1 = require("./router/user");
const PORT = 5000;
const app = (0, express_1.default)();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
(0, dotenv_1.configDotenv)();
const connectMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const MONGODB_URI = process.env.MONGODB_URI;
    yield mongoose.connect(MONGODB_URI);
});
connectMongoDB();
app.use("/food-category", cors(), food_category_1.FoodCategoryRouter);
app.use("/food", food_1.FoodsRouter);
app.use("/food-order", food_order_1.FoodOrderRouter);
app.use("/account", user_1.userRouter);
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
