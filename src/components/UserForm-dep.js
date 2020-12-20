import React, { Component } from 'react';
import { LinearProgress, IconButton } from '@material-ui/core';
import { Moon } from 'react-bootstrap-icons';

import AppBar from './TheAppBar';

import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormResults from './FormResults';
import './UserForm.scss';

export class UserForm extends Component {
  state = {
    step: 1,
    budget: 0,
    firstName: false,
    lastName: false,
    email: false,
    occupation: '',
    city: '',
    bio: '',
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go Back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // handle field change
  handleFieldChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // handle slider change
  handleSliderChange = (input) => (e, val) => {
    this.setState({ [input]: val });
  };

  // handle checkbox
  handleCheckChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  switchRender(step, values) {
    switch (step) {
      case 1:
        return (
          <FormStep1
            nextStep={this.nextStep}
            handleChange={this.handleSliderChange}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <FormStep2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleCheckChange}
            values={values}
            step={step}
          />
        );
      case 3:
        return (
          <FormStep3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleFieldChange}
            values={values}
            step={step}
          />
        );
      case 4:
        return (
          <FormStep4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleFieldChange}
            values={values}
            step={step}
          />
        );
      case 5:
        return (
          <FormResults
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleFieldChange}
            values={values}
            step={step}
          />
        );
      default:
        <h1>error 404</h1>;
    }
  }

  render() {
    const { step } = this.state;
    const {
      budget,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.state;

    const values = {
      budget,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    };

    const lastStep = 5;

    return (
      <div className='page-container'>
        <AppBar darkMode={this.props.darkMode} />

        <div className='forms'>{this.switchRender(step, values)}</div>
        <div className='progress'>
          <span>
            Step {step} of {lastStep}
          </span>
          <LinearProgress
            className='progress-bar'
            variant='determinate'
            value={((step - 1) / (lastStep - 1)) * 100}
          />
        </div>
      </div>
    );
  }
}

export default UserForm;
