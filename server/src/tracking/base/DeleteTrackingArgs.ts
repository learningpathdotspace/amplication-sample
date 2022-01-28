import { ArgsType, Field } from "@nestjs/graphql";
import { TrackingWhereUniqueInput } from "./TrackingWhereUniqueInput";

@ArgsType()
class DeleteTrackingArgs {
  @Field(() => TrackingWhereUniqueInput, { nullable: false })
  where!: TrackingWhereUniqueInput;
}

export { DeleteTrackingArgs };
