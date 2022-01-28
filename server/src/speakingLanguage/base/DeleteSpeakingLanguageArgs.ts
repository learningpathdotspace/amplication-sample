import { ArgsType, Field } from "@nestjs/graphql";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";

@ArgsType()
class DeleteSpeakingLanguageArgs {
  @Field(() => SpeakingLanguageWhereUniqueInput, { nullable: false })
  where!: SpeakingLanguageWhereUniqueInput;
}

export { DeleteSpeakingLanguageArgs };
