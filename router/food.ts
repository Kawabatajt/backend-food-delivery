import express, { Request, Response, Router } from "express";
import { FoodModel } from "../models/foods";

export const FoodsRouter = express.Router();
FoodsRouter.get("/", async (req: Request, res: Response) => {
  const Foods = await FoodModel.find();
  res.json(Foods);
});
FoodsRouter.post("/food", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const foodModel = new FoodModel({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    await foodModel.save();
    res.send(foodModel);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
