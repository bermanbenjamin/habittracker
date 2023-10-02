import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateplantsInput } from './user-createplants.input';
import { RoutineUncheckedCreateNestedManyWithoutUserInput } from '../routine/routine-unchecked-create-nested-many-without-user.input';
import { HabitUncheckedCreateNestedManyWithoutUserInput } from '../habit/habit-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutToDosInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Date, {nullable:false})
    birthdate!: Date | string;

    @Field(() => Int, {nullable:true})
    coins?: number;

    @Field(() => Int, {nullable:true})
    bestStreak?: number;

    @Field(() => Int, {nullable:true})
    currentStreak?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => Date, {nullable:true})
    lastDailyReward?: Date | string;

    @Field(() => Int, {nullable:true})
    dailyRewardCount?: number;

    @Field(() => String, {nullable:false})
    userSettingsId!: string;

    @Field(() => UserCreateplantsInput, {nullable:true})
    plants?: UserCreateplantsInput;

    @Field(() => RoutineUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => HabitUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput;
}
