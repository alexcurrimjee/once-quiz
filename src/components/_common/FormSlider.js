import React from 'react';
import styled from 'styled-components';
import { Button, Slider, Question } from './index';

// ------ STYLING -----
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
// --------------------

function FormSlider(props) {
  const {
    step,
    values,
    marks,
    name,
    question,
    help,
    handleChange,
    min,
    max,
  } = props;

  const moveBack = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const moveForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <Question step={step} question={question} help={help ? help : null} />

      <Slider
        onChange={handleChange(name)}
        value={values}
        step={null}
        min={min}
        max={max}
        marks={marks}
        track={props.track === false ? false : 'normal'}
      />

      <ButtonGroup>
        {step === 1 ? null : <Button onClick={moveBack}>Back</Button>}

        <Button
          variant='contained'
          color='primary'
          onClick={moveForward}
          disabled={values === 0 ? true : false}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default FormSlider;
