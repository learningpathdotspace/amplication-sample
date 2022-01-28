import { ArgsType, Field } from "@nestjs/graphql";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";
import { SpeakingLanguageUpdateInput } from "./SpeakingLanguageUpdateInput";

@ArgsType()
class UpdateSpeakingLanguageArgs {
  @Field(() => SpeakingLanguageWhereUniqueInput, { nullable: false })
  where!: SpeakingLanguageWhereUniqueInput;
  @Field(() => SpeakingLanguageUpdateInput, { nullable: false })
  data!: SpeakingLanguageUpdateInput;
}

export { UpdateSpeakingLanguageArgs };
