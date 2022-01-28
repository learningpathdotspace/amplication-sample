import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@ObjectType()
class SpeakingLanguage {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => SpeakingLanguage,
  })
  @ValidateNested()
  @Type(() => SpeakingLanguage)
  @IsOptional()
  speakingLanguage?: SpeakingLanguage | null;

  @ApiProperty({
    required: false,
    type: () => [SpeakingLanguage],
  })
  @ValidateNested()
  @Type(() => SpeakingLanguage)
  @IsOptional()
  speakingLanguages?: Array<SpeakingLanguage>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { SpeakingLanguage };
