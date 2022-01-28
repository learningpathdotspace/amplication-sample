import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class SpeakingLanguageCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

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
export { SpeakingLanguageCreateInput };
