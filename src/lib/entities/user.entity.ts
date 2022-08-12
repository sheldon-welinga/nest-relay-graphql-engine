import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/lib/entities';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Column()
  @Field()
  name: string;
}
