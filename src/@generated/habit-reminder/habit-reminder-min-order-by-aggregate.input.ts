import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HabitReminderMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAlarm?: keyof typeof SortOrder;
}
