import { Request, Response } from "express";
import { Pet } from "../models/pet";

let list = Pet.GetAll();

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: {
      all: true,
      cat: false,
      dog: false,
      fish: false
    },
    banner: {
      title: 'Todos os Pets',
      background: 'allanimals.jpg'
    },
    list
  })
}



export const dogs = (req: Request, res: Response) => {
  let list = Pet.GetFromType('dog');
  res.render('pages/page', {
    menu: {
      all: false,
      cat: false,
      dog: true,
      fish: false
    },
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  }

  )
}
export const cats = (req: Request, res: Response) => {
  let list = Pet.GetFromType('cat');
  res.render('pages/page', {
    menu: {
      all: false,
      cat: true,
      dog: false,
      fish: false
    },
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  })
}
export const fishes = (req: Request, res: Response) => {
  let list = Pet.GetFromType('fish');
  res.render('pages/page', {
    menu: {
      all: false,
      cat: false,
      dog: false,
      fish: true
    },
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    },
    list
  })
}
