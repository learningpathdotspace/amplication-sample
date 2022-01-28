export type SpeakingLanguage = {
  code: string;
  createdAt: Date;
  id: string;
  speakingLanguage?: SpeakingLanguage | null;
  speakingLanguages?: Array<SpeakingLanguage>;
  updatedAt: Date;
};
