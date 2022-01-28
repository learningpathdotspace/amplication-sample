import { StringFilter } from "../../util/StringFilter";
import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";

export type SpeakingLanguageWhereInput = {
  code?: StringFilter;
  id?: StringFilter;
  speakingLanguage?: SpeakingLanguageWhereUniqueInput;
};
