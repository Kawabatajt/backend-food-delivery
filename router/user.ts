import { Request, Response, Router } from "express";
import { UserModel } from "../models/users";

export const userRouter = Router();

userRouter.post("/", async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    res.json({ message: "no email provided" });
    return;
  }
  try {
    const existingUser = UserModel.find({ email: body.email });
    if (existingUser) {
      res.json(existingUser);
      return;
    }
    const newUser = await UserModel.create(body);
    res.json(newUser);
  } catch (e) {
    console.error(e, "aldaa");
  }
});
