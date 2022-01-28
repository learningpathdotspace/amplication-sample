import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class SpeakingLanguageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string;

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
  speakingLanguage?: SpeakingLanguageWhereUniqueInput | null;
}
export { SpeakingLanguageUpdateInput };
