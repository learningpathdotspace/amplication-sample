import { ArgsType, Field } from "@nestjs/graphql";
import { TrackingWhereUniqueInput } from "./TrackingWhereUniqueInput";

@ArgsType()
class TrackingFindUniqueArgs {
  @Field(() => TrackingWhereUniqueInput, { nullable: false })
  where!: TrackingWhereUniqueInput;
}

export { TrackingFindUniqueArgs };
