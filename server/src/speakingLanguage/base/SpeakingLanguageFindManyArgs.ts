import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SpeakingLanguageWhereInput } from "./SpeakingLanguageWhereInput";
import { Type } from "class-transformer";
import { SpeakingLanguageOrderByInput } from "./SpeakingLanguageOrderByInput";

@ArgsType()
class SpeakingLanguageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SpeakingLanguageWhereInput,
  })
  @Field(() => SpeakingLanguageWhereInput, { nullable: true })
  @Type(() => SpeakingLanguageWhereInput)
  where?: SpeakingLanguageWhereInput;

  @ApiProperty({
    required: false,
    type: SpeakingLanguageOrderByInput,
  })
  @Field(() => SpeakingLanguageOrderByInput, { nullable: true })
  @Type(() => SpeakingLanguageOrderByInput)
  orderBy?: SpeakingLanguageOrderByInput;

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

export { SpeakingLanguageFindManyArgs };
