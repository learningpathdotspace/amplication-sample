import { ArgsType, Field } from "@nestjs/graphql";
import { TrackingCreateInput } from "./TrackingCreateInput";

@ArgsType()
class CreateTrackingArgs {
  @Field(() => TrackingCreateInput, { nullable: false })
  data!: TrackingCreateInput;
}

export { CreateTrackingArgs };
