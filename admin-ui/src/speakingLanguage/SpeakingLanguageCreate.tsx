import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SpeakingLanguageTitle } from "./SpeakingLanguageTitle";

export const SpeakingLanguageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="speakinglanguage.id"
          reference="SpeakingLanguage"
          label="Speaking Language"
        >
          <SelectInput optionText={SpeakingLanguageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
