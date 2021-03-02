import React from 'react';

import { Wrapper, StyledTitle } from '../UsersList/UsersList.styles';
import FormField from '../../molecules/FormField/FormField';
import { Button } from 'compontents/atoms/Button/Button';

const Form = ({ handleInputChange, handleAddUser, formValues }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
