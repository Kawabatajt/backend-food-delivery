import express, { Request, Response, Router } from "express";
import { FoodModel } from "../models/foods";
import { verifyToken } from "@clerk/backend";
export const FoodsRouter = express.Router();
FoodsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const filter = id ? { category: id } : {};
    const Foods = await FoodModel.find(filter);
    res.json(Foods);
  } catch {
    res.json({ status: "Dont have access" });
  }
});
FoodsRouter.post("/", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const foodModel = await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    res.json(foodModel);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
FoodsRouter.put("/", async (req: Request, res: Response) => {
  const { id } = req.query;
  const body = req.body;

  const updatedFood = await FoodModel.findByIdAndUpdate(id, body);
  res.json(updatedFood);
});
FoodsRouter.delete("/", async (req: Request, res: Response) => {
  const { id } = req.query;
  const updatedFood = await FoodModel.findByIdAndDelete(id);
  res.json(updatedFood);
});
