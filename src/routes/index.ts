import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/waterAnimals', PageController.waterAnimals)
router.get('/reptiles', PageController.reptiles)

router.get('/Search', SearchController.search)

export default router;