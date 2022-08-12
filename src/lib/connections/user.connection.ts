import { Connection } from './index.connection';
import { User } from 'src/lib/entities';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserConnection extends Connection<User>(User) {}
