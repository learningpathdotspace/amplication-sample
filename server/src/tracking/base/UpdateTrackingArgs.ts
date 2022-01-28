import { ArgsType, Field } from "@nestjs/graphql";
import { TrackingWhereUniqueInput } from "./TrackingWhereUniqueInput";
import { TrackingUpdateInput } from "./TrackingUpdateInput";

@ArgsType()
class UpdateTrackingArgs {
  @Field(() => TrackingWhereUniqueInput, { nullable: false })
  where!: TrackingWhereUniqueInput;
  @Field(() => TrackingUpdateInput, { nullable: false })
  data!: TrackingUpdateInput;
}

export { UpdateTrackingArgs };
