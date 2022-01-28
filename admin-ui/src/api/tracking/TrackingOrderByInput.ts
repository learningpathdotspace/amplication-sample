import { SortOrder } from "../../util/SortOrder";

export type TrackingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  loggedAt?: SortOrder;
  updatedAt?: SortOrder;
};
