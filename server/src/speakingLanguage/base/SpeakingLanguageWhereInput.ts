import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";
@InputType()
class SpeakingLanguageWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  code?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SpeakingLanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SpeakingLanguageWhereUniqueInput)
  @IsOptional()
  @Field(() => SpeakingLanguageWhereUniqueInput, {
    nullable: true,
  })
  speakingLanguage?: SpeakingLanguageWhereUniqueInput;
}
export { SpeakingLanguageWhereInput };
