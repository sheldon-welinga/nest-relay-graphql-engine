import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/lib/entities';
import { UserResolver } from './user.resolver';
import { UserRepository } from '../lib/repository/user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver, UserRepository],
})
export class UserModule {}
