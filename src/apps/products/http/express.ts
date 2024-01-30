import { Request, Response, Router } from 'express';

import Product from '../database/models/productModel';
import { productRepository } from '../repositories/productRepository';
import { ProductServices } from '../services/productService';
import { productController } from '../controllers/productController';

const router=Router();

const repository = new productRepository(Product);
const service = new ProductServices(repository);
const controller = new productController<Request, Response>(service);

router.post('/',controller.onCreateProduct.bind(controller))
export default router