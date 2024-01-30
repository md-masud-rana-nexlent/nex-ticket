import { User } from '../domain/User';

export interface IUserService {
  createUser(input: User): void;
  getUsers(limit: number, offset: number): void;
  findUser(id: string): void;
  updateUser(id: string, input: User): void;
}
