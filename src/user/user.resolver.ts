import { Args, Query, Resolver } from '@nestjs/graphql';
import { connectionFromPromisedArray } from 'graphql-relay';
import { UserConnection } from 'src/lib/connections';
import { User } from 'src/lib/entities';
import { ConnectionArgs } from 'src/lib/connections';
import { UserService } from 'src/user/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserConnection)
  async users(@Args() args: ConnectionArgs) {
    return await connectionFromPromisedArray(
      this.userService.findAllUsers(),
      args,
    );
  }
}
