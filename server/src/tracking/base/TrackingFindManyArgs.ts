import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrackingWhereInput } from "./TrackingWhereInput";
import { Type } from "class-transformer";
import { TrackingOrderByInput } from "./TrackingOrderByInput";

@ArgsType()
class TrackingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TrackingWhereInput,
  })
  @Field(() => TrackingWhereInput, { nullable: true })
  @Type(() => TrackingWhereInput)
  where?: TrackingWhereInput;

  @ApiProperty({
    required: false,
    type: TrackingOrderByInput,
  })
  @Field(() => TrackingOrderByInput, { nullable: true })
  @Type(() => TrackingOrderByInput)
  orderBy?: TrackingOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TrackingFindManyArgs };
