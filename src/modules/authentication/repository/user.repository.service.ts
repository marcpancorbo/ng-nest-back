import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user';
@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  register(user: Omit<User, 'id'>): Promise<User> {
    return this.repository.save(user);
  }

  login(username: string): Promise<User> {
    return this.repository.findOne({ where: { username } });
  }
}
