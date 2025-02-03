import express, { Request, Response, Router } from "express";
import { FoodOrderModel } from "../models/food-order";
import { verifyToken } from "@clerk/backend";
export const FoodOrderRouter = express.Router();
export type CustomRequest = Request & {
  userId?: string;
  email?: string;
};

const auth = async (req: any, res: any, next: any) => {
  const token = req.get("authentication");
  try {
    const verified = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    req.userId = verified.sub;

    next();
  } catch {
    res.json({ status: "not accessible" });
  }
};
FoodOrderRouter.get("/", auth, async (req: CustomRequest, res: Response) => {
  try {
    const user = req?.userId;
    const myOrders = await FoodOrderModel.find({
      user: user,
    });
    res.json(myOrders);
  } catch (e) {
    res.send(e);
  }
});

FoodOrderRouter.post("/", auth, async (req: CustomRequest, res: Response) => {
  const user = req?.userId;
  const { foodOrderItems, totalPrice, address, email } = req.body;
  const order = { user, foodOrderItems, totalPrice, address, email };
  const newOrder = await FoodOrderModel.create(order);
  res.json(newOrder);
});
