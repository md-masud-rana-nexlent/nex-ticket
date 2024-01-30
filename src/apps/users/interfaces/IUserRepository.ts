import { User } from '../domain/User';

export interface IUserRepository {
  create(input: User): Promise<User | Error>;
  find(id: string): Promise<User | Error>;
  get(limit: number, offset: number): Promise<User[] | Error>;
  update(id: string, input: User): Promise<User | Error>;
}
