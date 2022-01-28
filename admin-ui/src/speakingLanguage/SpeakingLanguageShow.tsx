import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SPEAKINGLANGUAGE_TITLE_FIELD } from "./SpeakingLanguageTitle";

export const SpeakingLanguageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Speaking Language"
          source="speakinglanguage.id"
          reference="SpeakingLanguage"
        >
          <TextField source={SPEAKINGLANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SpeakingLanguage"
          target="SpeakingLanguageId"
          label="SpeakingLanguages"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Speaking Language"
              source="speakinglanguage.id"
              reference="SpeakingLanguage"
            >
              <TextField source={SPEAKINGLANGUAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
