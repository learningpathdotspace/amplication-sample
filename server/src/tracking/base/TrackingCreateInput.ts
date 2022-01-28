import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class TrackingCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  loggedAt!: Date;
}
export { TrackingCreateInput };
