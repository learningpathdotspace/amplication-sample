import { SpeakingLanguage as TSpeakingLanguage } from "../api/speakingLanguage/SpeakingLanguage";

export const SPEAKINGLANGUAGE_TITLE_FIELD = "code";

export const SpeakingLanguageTitle = (record: TSpeakingLanguage): string => {
  return record.code || record.id;
};
