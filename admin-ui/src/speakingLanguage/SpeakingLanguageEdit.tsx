import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SpeakingLanguageTitle } from "./SpeakingLanguageTitle";

export const SpeakingLanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
