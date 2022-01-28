import { ArgsType, Field } from "@nestjs/graphql";
import { SpeakingLanguageCreateInput } from "./SpeakingLanguageCreateInput";

@ArgsType()
class CreateSpeakingLanguageArgs {
  @Field(() => SpeakingLanguageCreateInput, { nullable: false })
  data!: SpeakingLanguageCreateInput;
}

export { CreateSpeakingLanguageArgs };
