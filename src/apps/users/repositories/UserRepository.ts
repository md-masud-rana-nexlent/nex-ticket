import { Model } from 'mongoose';
import { dbConnect } from '../database/dbConfig';
import { User } from '../domain/User';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserRepository implements IUserRepository {
  private UserModel: Model<User>;

  constructor(UserModel: Model<User>) {
    dbConnect();
    this.UserModel = UserModel;
  }

  async create(input: User) {
    try {
      const user = await this.UserModel.create(input);
      return user;
    } catch (error) {
      return error as Error;
    }
  }

  async find(id: string) {
    try {
      const user = await this.UserModel.findById(id).exec();
      return user;
    } catch (error) {
      return error;
    }
  }

  async get(limit: number, offset: number) {
    try {
      const users = await this.UserModel.find().limit(limit).skip(offset).exec();
      return users;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, input: User) {
    try {
      const user = await this.UserModel.findByIdAndUpdate(id, input);
      return user;
    } catch (error) {
      return error;
    }
  }
}
