import React from 'react';
import styled from 'styled-components';
import { Button, Question, RadioGrid } from './_common/index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormStep3(props) {
  const { step, values, handleChange } = props;
  const question = 'What is your position? (1 option)';
  const help = 'Only select one option';

  const target = values.occupation;
  const name = 'occupation';
  const options = [
    {
      value: 'Analyst',
      title: '1 - Analyst',
      image: false,
    },
    {
      value: 'Manager',
      title: '2 - Manager',
      image: false,
    },
    { value: 'CEO/Founder', title: '3 - CEO/Founder', image: false },
  ];

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

      <RadioGrid
        name={name}
        current={target}
        options={options}
        handleChange={handleChange}
      />

      <ButtonGroup>
        <Button onClick={moveBack}>Back</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={moveForward}
          disabled={target === '' ? true : false}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FormStep3;
