import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import { FormSlider, FormCheck, FormRadio, FormText } from './_common/index';

import FormResults from './FormResults';

//Random CSS (can't be bothered to optimize)
import './UserForm.scss';

const Title = styled.div`
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 20px;

  & h4 {
    max-width: 50px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function TheForm(props) {
  // Initial State
  const questions = [
    '',
    'What is your budget (max):',
    'Which Metal would you like?',
    'What Gems would you like?',
    'Choose your style:',
  ];

  const helps = [
    '',
    '',
    'Choose One',
    'Choose as many as you want  (other gems include Jade, Sapphire, Emerald...)',
    '',
  ];

  const [state, setState] = useState({
    step: 1,
    question: questions[1],
    help: helps[1],
    budget: 0, // How to declare a Slider
    metal: '', // How to declare a Bullet point
    whiteDiamond: false, // How to declare a checkbox (1)
    coloredDiamond: false, // How to declare a checkbox (2)
    otherGem: false, // How to declare a checkbox (3)
    noGem: false, // How to declare a checkbox (4)
    style: 2,
  });
  const title = 'Bridal Ring Finder';
  const { step, question, help } = state;
  // Used for the progress bar
  const lastStep = 5;
  const {
    budget,
    metal,
    whiteDiamond,
    coloredDiamond,
    otherGem,
    noGem,
    style,
  } = state;

  const values = {
    budget,
    metal,
    whiteDiamond,
    coloredDiamond,
    otherGem,
    noGem,
    style,
  };

  // Steps for the slider
  const budgetMarks = [
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

  const styleMarks = [
    {
      value: 1,
      label: 'Traditional',
    },
    {
      value: 2,
      label: 'Normal',
    },
    {
      value: 3,
      label: 'Excentric',
    },
  ];

  const metalOptions = [
    {
      value: 'White Gold',
      title: '1 - White Gold',
      image: true,
    },
    {
      value: 'Yellow Gold',
      title: '2 - Yellow Gold',
      image: true,
    },
    { value: 'Rose Gold', title: '3 - Rose Gold', image: true },
  ];

  const gemOptions = [
    {
      name: 'whiteDiamond',
      value: whiteDiamond,
      title: '1 - White Diamonds',
      image: false,
    },
    {
      name: 'coloredDiamond',
      value: coloredDiamond,
      title: '2 - Colored Diamonds',
      image: false,
    },
    {
      name: 'otherGem',
      value: otherGem,
      title: '3 - Other Gems',
      image: false,
    },
    {
      name: 'noGem',
      value: noGem,
      title: '4 - None',
      image: false,
    },
  ];

  // Go to Next step
  const nextStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step + 1,
      question: questions[step + 1],
      help: helps[step + 1],
    });
  };

  // Go to previous step
  const prevStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step - 1,
      question: questions[step - 1],
      help: helps[step - 1],
    });
  };

  // handle field change
  const handleFieldChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  // handle slider change
  const handleSliderChange = (input) => (event, value) => {
    setState({ ...state, [input]: value });
  };

  // handle checkbox
  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // handle radio button
  const handleRadioChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // Identify the page based on the step #

  /* Common Props all take this in: 

  - nextStep (can be disabled)
  - prevStep (can be disabled)
  - handleChange
  - step 
  - question
  - help (optional)

  ~~~~~~~ Slider 
  - values = Target 
  - name = Target Name
  - marks
  - min 
  - max
  - track (optional)
  
  ~~~~~~~ Checkbox
  - options
  ? values & target name = these are passed inside the options array

  ~~~~~~~ RadioButton
  - values = Target 
  - options
  - name  = Target Name

   ~~~~~~~ Text
  - values = Target 
  - name  = Target Name
  */

  const switchRender = (step, question, help, values) => {
    switch (step) {
      case 1:
        return (
          <FormSlider
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleSliderChange}
            values={values.budget}
            name='budget'
            step={step}
            question={question}
            help={help}
            marks={budgetMarks}
            min={0}
            max={15000}
          />
        );
      case 2:
        return (
          <FormRadio
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleRadioChange}
            step={step}
            values={values.metal}
            question={question}
            help={help}
            options={metalOptions}
            name='metal'
          />
        );
      case 3:
        return (
          <FormCheck
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleCheckChange}
            step={step}
            question={question}
            help={help}
            options={gemOptions}
          />
        );
      case 4:
        return (
          // <FormText
          //   nextStep={nextStep}
          //   prevStep={prevStep}
          //   handleChange={handleFieldChange}
          //   values={values.city}
          //   question={question}
          //   help={help}
          //   step={step}
          //   name='city'
          // />

          <FormSlider
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleSliderChange}
            values={values.style}
            name='style'
            step={step}
            question={question}
            help={help}
            marks={styleMarks}
            min={1}
            max={3}
            track={false}
          />
        );
      case 5:
        return (
          <FormResults
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleFieldChange}
            values={values}
            step={step}
            track={false}
          />
        );
      default:
        <h1>Something went wrong...</h1>;
    }
  };

  return (
    <div className='page-container'>
      <div className={step === lastStep ? 'forms large' : 'forms'}>
        {switchRender(step, question, help, values)}
      </div>

      <div className='progress'>
        <span>
          Step {step} of {lastStep}
        </span>
        <LinearProgress
          className='progress-bar'
          variant='determinate'
          value={((step - 1) / (lastStep - 1)) * 100}
        />
        <Title>
          <p>{title}</p>
        </Title>
      </div>
    </div>
  );
}

export default TheForm;
