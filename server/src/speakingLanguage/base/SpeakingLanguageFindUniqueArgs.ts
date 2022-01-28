import { ArgsType, Field } from "@nestjs/graphql";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";

@ArgsType()
class SpeakingLanguageFindUniqueArgs {
  @Field(() => SpeakingLanguageWhereUniqueInput, { nullable: false })
  where!: SpeakingLanguageWhereUniqueInput;
}

export { SpeakingLanguageFindUniqueArgs };
