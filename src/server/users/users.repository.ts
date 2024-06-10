import mockData from './mockUser.json';
import { User } from '../../common/entities/user';

export class UsersRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  getUsers(searchQuery: string): User[] {
    const data = JSON.parse(JSON.stringify(mockData));
    const users = data as User[];

    if (searchQuery) {
      this.users = users.filter((user) => user.email.includes(searchQuery));
    } else {
      this.users = users;
    }

    return this.users;
  }

  createUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u) => u.email !== user.email);
  }
}
