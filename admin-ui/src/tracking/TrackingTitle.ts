import { Tracking as TTracking } from "../api/tracking/Tracking";

export const TRACKING_TITLE_FIELD = "id";

export const TrackingTitle = (record: TTracking): string => {
  return record.id || record.id;
};
