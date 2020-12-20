import React from 'react';
import styled from 'styled-components';

import { Button, Question, TextField } from './index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormStep4(props) {
  const { step, values, name, handleChange, question, help } = props;

  const moveForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const moveBack = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <div>
      <Question step={step} question={question} help={help} />
      <TextField
        label={name.charAt(0).toUpperCase() + name.slice(1)}
        name={name}
        onChange={handleChange(name)}
        defaultValue={values}
      />
      <ButtonGroup>
        <Button onClick={moveBack}>Back</Button>
        <Button variant='contained' color='primary' onClick={moveForward}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FormStep4;
