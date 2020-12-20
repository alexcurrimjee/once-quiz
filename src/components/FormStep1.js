import React from 'react';
import { Button, Slider, Question } from './_common/index';

function FormStep1(props) {
  const { step, values, handleChange } = props;

  // Don't include the previous step as this is the first page
  const moveForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const question = 'What is your budget (max):';

  // Steps for the slider
  const marks = [
    {
      value: 0,
      label: '',
    },
    {
      value: 2500,
      label: '£2,500',
    },
    {
      value: 5000,
      label: '£5,000',
    },
    {
      value: 10000,
      label: '£10,000',
    },
    {
      value: 15000,
      label: '£15,000',
    },
  ];

  return (
    <div>
      <Question step={step} question={question} />

      <Slider
        onChange={handleChange('budget')}
        value={values.budget}
        step={null}
        min={0}
        max={15000}
        marks={marks}
      />

      <Button
        variant='contained'
        color='primary'
        onClick={moveForward}
        disabled={values.budget === 0 ? true : false}>
        Next
      </Button>
    </div>
  );
}

export default FormStep1;
