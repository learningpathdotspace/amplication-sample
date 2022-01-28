import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TrackingWhereInput = {
  id?: StringFilter;
  loggedAt?: DateTimeFilter;
};
