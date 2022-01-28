import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  nationality?: StringNullableFilter;
  primarySpeakingLanguage?: StringNullableFilter;
  secondaryLanguage?: StringNullableFilter;
  username?: StringFilter;
};
