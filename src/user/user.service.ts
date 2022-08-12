import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/lib/entities';
import { UserRepository } from 'src/lib/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
