import React from 'react';
import styled from 'styled-components';
import { Button, Question, CheckGrid } from './_common/index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormStep2(props) {
  const { step, values, handleChange } = props;
  const question = 'What information can you provide? (multiple choice)';
  const help = 'Choose as many as you like:';
  //Identify which states to target
  const options = [
    {
      name: 'firstName',
      value: values.firstName,
      title: '1 - First Name',
      image: true,
    },
    {
      name: 'lastName',
      value: values.lastName,
      title: '2 - Last Name',
      image: true,
    },
    { name: 'email', value: values.email, title: '3 - Email', image: true },
  ];

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
      <Question step={step} question={question} help={help} />

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

export default FormStep2;
