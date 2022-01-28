import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const TrackingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Logged At" source="loggedAt" />
      </SimpleForm>
    </Create>
  );
};
