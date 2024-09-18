import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('homecontroller')
  //res.render('pages/page')

}

export const dogs = (req: Request, res: Response) => {
  res.send('dogscontroller')
  //res.render('pages/dogs')
  
}

export const cats = (req: Request, res: Response) => {
  res.send('catscontroller')
  //res.render('pages/cats')
  
}

export const waterAnimals = (req: Request, res: Response) => {
  res.send('waterAnimalscontroller')
  //res.render('pages/waterAnimals')
  
}

export const reptiles = (req: Request, res: Response) => {
  res.send('reptilescontroller')
  //res.render('pages/reptiles')
  
}