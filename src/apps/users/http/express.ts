import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/UserController';
import UserModel from '../database/models/UserModel';
import { UserRepository } from '../repositories/UserRepository';
import { UserServices } from '../services/UserService';

const router = Router();

const repository = new UserRepository(UserModel);
const service = new UserServices(repository);
const controller = new UserController<Request, Response>(service);

router.post('/', controller.onCreateUser.bind(controller));
router.get('/:id', controller.onFindUser.bind(controller));

export default router;
