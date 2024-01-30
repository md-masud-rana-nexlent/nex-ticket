import { errorResponse } from '@/helpers/response';
import { slsRouter } from '@/helpers/slsRouter';
import { APIGatewayProxyEventV2, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';
import { UserController } from '../controllers/UserController';
import UserModel from '../database/models/UserModel';
import { UserRepository } from '../repositories/UserRepository';
import { UserServices } from '../services/UserService';

const repository = new UserRepository(UserModel);
const service = new UserServices(repository);
const controller = new UserController<APIGatewayProxyEventV2, Context>(service);

const routes = {
  'GET /users/{id}': controller.onFindUser.bind(controller),
  'POST /users': controller.onCreateUser.bind(controller),
  default: async (event: APIGatewayProxyEventV2, context: Context) => errorResponse(context, 404, { message: 'Failed: Invalid Method or Route' }),
};

export const usersApiHandler: Handler = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResult | unknown> => {
  try {
    return await slsRouter(routes, event, context);
  } catch (error) {
    console.log('Routing error: ', error);

    return errorResponse(context, 500, { message: 'Routing failed!', error });
  }
};
