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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_1 = require("../models/users");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        res.json({ message: "no email provided" });
        return;
    }
    try {
        const existingUser = users_1.UserModel.find({ email: body.email });
        if (existingUser) {
            res.json(existingUser);
            return;
        }
        const newUser = yield users_1.UserModel.create(body);
        res.json(newUser);
    }
    catch (e) {
        console.error(e, "aldaa");
    }
}));
