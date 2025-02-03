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
exports.FoodOrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_order_1 = require("../models/food-order");
const backend_1 = require("@clerk/backend");
exports.FoodOrderRouter = express_1.default.Router();
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.get("authentication");
    try {
        const verified = yield (0, backend_1.verifyToken)(token, {
            secretKey: process.env.CLERK_SECRET_KEY,
        });
        req.userId = verified.sub;
        next();
    }
    catch (_a) {
        res.json({ status: "not accessible" });
    }
});
exports.FoodOrderRouter.get("/", auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req === null || req === void 0 ? void 0 : req.userId;
        const myOrders = yield food_order_1.FoodOrderModel.find({
            user: user,
        });
        res.json(myOrders);
    }
    catch (e) {
        res.send(e);
    }
}));
exports.FoodOrderRouter.post("/", auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req === null || req === void 0 ? void 0 : req.userId;
    const { foodOrderItems, totalPrice, address } = req.body;
    const order = { user, foodOrderItems, totalPrice, address };
    const newOrder = yield food_order_1.FoodOrderModel.create(order);
    res.json(newOrder);
}));
