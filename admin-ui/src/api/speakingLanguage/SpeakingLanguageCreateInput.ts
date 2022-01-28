import { SpeakingLanguageWhereUniqueInput } from "./SpeakingLanguageWhereUniqueInput";

export type SpeakingLanguageCreateInput = {
  code: string;
  speakingLanguage?: SpeakingLanguageWhereUniqueInput | null;
};
