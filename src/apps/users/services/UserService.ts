import { User } from '../domain/User';
import { IUserService } from '../interfaces/IUserService';
import { IUserRepository } from './../interfaces/IUserRepository';

export class UserServices implements IUserService {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  async createUser(input: User) {
    try {
      const user = await this.repository.create(input);
      return user;
    } catch (error) {
      return error as Error;
    }
  }

  findUser(id: string) {
    return this.repository.find(id);
  }

  getUsers(limit: number, offset: number) {
    return this.repository.get(limit, offset);
  }

  updateUser(id: string, input: User) {
    return this.repository.update(id, input);
  }
}
