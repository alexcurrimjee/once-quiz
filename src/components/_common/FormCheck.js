import React from 'react';
import styled from 'styled-components';
import { Button, Question, CheckGrid } from './index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormCheck(props) {
  const { step, question, help, options, handleChange } = props;

  const truthy = (element) => element.value;

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
      <Question step={step} question={question} help={help ? help : null} />

      <CheckGrid options={options} handleChange={handleChange} />

      <ButtonGroup>
        <Button onClick={moveBack}>Back</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={moveForward}
          disabled={options.some(truthy) ? false : true}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FormCheck;
