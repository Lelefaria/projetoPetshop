import { Request, Response } from "express";
import { CreateMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  let list = Pet.GetFromName(query);

  res.render('pages/page', {
    menu: CreateMenuObject(''),
    list
  });
}