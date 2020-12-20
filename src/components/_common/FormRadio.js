import React from 'react';
import styled from 'styled-components';
import { Button, Question, RadioGrid } from './index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormStep3(props) {
  const { step, values, question, options, name, help, handleChange } = props;

  // const target = values.occupation;

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

      <RadioGrid
        name={name}
        current={values}
        options={options}
        handleChange={handleChange}
      />

      <ButtonGroup>
        <Button onClick={moveBack}>Back</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={moveForward}
          disabled={values === '' ? true : false}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FormStep3;
