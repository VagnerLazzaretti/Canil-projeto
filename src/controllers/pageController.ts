import { Request, Response } from 'express';

import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render('pages/page', {
    menu: {
        all: true,
        dogs: false,
        cats: false,
        waterAnimals: false,
        reptiles: false
    },
    banner: {
      title: 'All animals',
      bgImg: 'allanimals.jpg'
    },
    list
  })

}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.render('pages/page', {
    menu: {
      all: false,
      dogs: true,
      cats: false,
      waterAnimals: false,
      reptiles: false
    },
    banner: {
      title: 'Dogs',
      bgImg: 'banner_dog.jpg'
    },
    list
  })
  
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.render('pages/page', {
    menu: {
      all: false,
      dogs: false,
      cats: true,
      waterAnimals: false,
      reptiles: false
    },
    banner: {
      title: 'Cats',
      bgImg: 'banner_cat.jpg'
    },
    list
  })
  
  
}

export const waterAnimals = (req: Request, res: Response) => {
  let list = Pet.getFromType('waterAnimal')

  res.render('pages/page', {
    menu: {
      all: false,
      dogs: false,
      cats: false,
      waterAnimals: true,
      reptiles: false
    },
    banner: {
      title: 'Water Animals',
      bgImg: 'banner_fish.jpg'
    },
    list
  })
  
  
}

export const reptiles = (req: Request, res: Response) => {
  let list = Pet.getFromType('reptile')

  res.render('pages/page', {
    menu: {
      all: false,
      dogs: false,
      cats: false,
      waterAnimals: false,
      reptiles: true
    },
    banner: {
      title: 'Reptiles',
      bgImg: 'banner_reptile.jpg'
    },
    list
  })
  
  
}