import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserSettingsAvgAggregate {

    @Field(() => Float, {nullable:true})
    weekStartsOn?: number;
}
