export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  nationality: string | null;
  primarySpeakingLanguage: string | null;
  roles: Array<string>;
  secondaryLanguage: string | null;
  updatedAt: Date;
  username: string;
};
