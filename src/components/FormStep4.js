import React from 'react';
import styled from 'styled-components';

import { Button, Question, TextField } from './_common/index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormStep4(props) {
  const { step, values, handleChange } = props;

  const question = 'In what city are you located?';

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
      <Question step={step} question={question} />
      <TextField
        label='City'
        onChange={handleChange('city')}
        defaultValue={values.city}
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
