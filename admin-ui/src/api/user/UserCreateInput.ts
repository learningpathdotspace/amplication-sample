export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  nationality?: string | null;
  password: string;
  primarySpeakingLanguage?: string | null;
  roles: Array<string>;
  secondaryLanguage?: string | null;
  username: string;
};
