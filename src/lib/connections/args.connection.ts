import { ArgsType, Field } from '@nestjs/graphql';
import { ConnectionArguments, ConnectionCursor } from 'graphql-relay';

@ArgsType()
export class ConnectionArgs implements ConnectionArguments {
  @Field(() => String, {
    nullable: true,
    description: 'Paginate before opaque cursor',
  })
  public before?: ConnectionCursor;

  @Field(() => String, {
    nullable: true,
    description: 'Paginate after opaque cursor',
  })
  public after?: ConnectionCursor;

  @Field(() => Number, { nullable: true, description: 'Paginate first' })
  public first?: number;

  @Field(() => Number, { nullable: true, description: 'Paginate last' })
  public last?: number;
}
