import express, { Request, Response, Router } from "express";
import { FoodModel } from "../models/foods";

export const FoodsRouter = express.Router();
FoodsRouter.get("/", async (req: Request, res: Response) => {
  const { id } = req.query;
  const filter = id ? { category: id } : {};
  const Foods = await FoodModel.find(filter);
  res.json(Foods);
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
