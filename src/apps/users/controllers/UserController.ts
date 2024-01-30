import { RequestValidator } from '@/helpers/requestValidation';
import { errorResponse, successResponse } from '@/helpers/response';
import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { Request, Response } from 'express';
import { User } from '../domain/User';
import { IUserService } from '../interfaces/IUserService';
import { CreateUser } from '../validations/user';

export class UserController<T extends Request | APIGatewayProxyEventV2, U extends Response | Context> {
  private service: IUserService;

  constructor(service: IUserService) {
    this.service = service;
  }

  async onCreateUser(req: T, res: U) {
    try {
      const { errors } = await RequestValidator(CreateUser, req.body);

      if (errors) return errorResponse(res, 400, errors);

      const result = await this.service.createUser(req.body as User);
      return successResponse(res, result);
    } catch (error) {
      const err = error as Error;
      return errorResponse(res, 500, err);
    }
  }

  onFindUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id) return res.status(400).json({ message: 'Invalid request' });
      const result = this.service.findUser(id);
      return result;
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  }
}
