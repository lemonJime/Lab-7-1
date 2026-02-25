import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  genders: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, genders, onSave } = props;

  return (
    <>
      {character.image && (
        <img
          src={character.image}
          alt={character.name}
          style={{ width: '200px', borderRadius: '8px', marginBottom: '16px' }}
        />
      )}

      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" />
            <TextFieldComponent name="status" label="Status" />
            <TextFieldComponent name="species" label="Species" />
            <SelectComponent name="gender" label="Gender" items={genders} />
            <TextFieldComponent name="originName" label="Origin" />
            <TextFieldComponent name="locationName" label="Location" />
          </Form>
        )}
      </Formik>
    </>
  );
};
