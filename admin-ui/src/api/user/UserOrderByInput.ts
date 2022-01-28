import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  nationality?: SortOrder;
  password?: SortOrder;
  primarySpeakingLanguage?: SortOrder;
  roles?: SortOrder;
  secondaryLanguage?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
