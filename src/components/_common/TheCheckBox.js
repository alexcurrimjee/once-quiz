import React from 'react';
import styled from 'styled-components';
import { Check } from 'react-bootstrap-icons';

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  height: ${(props) => (props.image ? '100px' : 'inherit')};
  box-shadow: #b9826996 0px 0px 0px 1px inset;
  background-color: ${(props) => (props.checked ? '#b9826975' : '#b9826921')};
  border-radius: 4px;
  cursor: pointer;
  &: hover {
    background-color: ${(props) => (props.checked ? '#b9826975' : '#b982694f')};
  }
`;

const StyledTitle = styled.p`
  align-self: flex-end;
  padding: 10px;
  margin: 0;
  color: ${(props) => (props.checked ? 'white' : '#b9826996')};
  font-size: 18px;
`;

const StyleIcon = styled.div`
  position: absolute;
  display: ${(props) => (props.checked ? 'block' : 'none')};
  width: 0;
  height: 0;
  right: 0;
  border-radius: 0 4px 0 0;
  border-style: solid;
  border-width: 0 35px 35px 0;
  border-color: transparent #b9826996 transparent transparent;
`;

const StyledCheck = styled(Check)`
  position: absolute;
  display: ${(props) => (props.checked ? 'block' : 'none')};
  right: 0;
  color: white;
`;

function TheCheckBox(props) {
  return (
    <div>
      <StyledInput
        type='checkbox'
        checked={props.checked}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
      />
      <StyledLabel
        checked={props.checked}
        image={props.image}
        htmlFor={props.name}>
        <StyleIcon checked={props.checked} />
        <StyledCheck checked={props.checked} size={22} />
        <StyledTitle checked={props.checked}>{props.title}</StyledTitle>
      </StyledLabel>
    </div>
  );
}
export default TheCheckBox;
