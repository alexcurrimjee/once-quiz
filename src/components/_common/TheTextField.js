import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  width: 50%;
`;

function TheTextField(props) {
  return (
    <StyledTextField
      label={props.label}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
}

export default TheTextField;
