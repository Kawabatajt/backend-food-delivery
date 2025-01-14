import express, { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";

export const FoodCategoryRouter = express.Router();

FoodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const FoodCategories = await FoodCategoryModel.find();
  res.json(FoodCategories);
});
FoodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const foodCategory = new FoodCategoryModel({ categoryName });
    await foodCategory.save();
    res.send(foodCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
FoodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  const updatedCategory = await FoodCategoryModel.findByIdAndUpdate(
    id,
    { categoryName },
    { new: true }
  );
  res.send(updatedCategory);
});
FoodCategoryRouter.delete(
  "/food-category/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedCategory = await FoodCategoryModel.findByIdAndDelete(id);
    res.send(updatedCategory);
  }
);
