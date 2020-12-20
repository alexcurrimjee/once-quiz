import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ArrowRightShort } from 'react-bootstrap-icons';

const QuestionContainer = styled.div`
  margin-bottom: 50px;
`;

const TopQuestion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
`;

const HelperText = styled.p`
  margin: 0;
  color: #b98269;
`;

const Arrow = styled(ArrowRightShort)`
  fill: #b98269;
`;

const Number = styled.div`
  position: relative;

  @media (min-width: 789px) {
    position: absolute;
    left: -60px;
  }
  display: flex;
  align-items: flex-end;
`;

function TheQuestion(props) {
  return (
    <QuestionContainer>
      <TopQuestion>
        <Number>
          <Typography variant='h5' color='primary'>
            {props.step}
          </Typography>
          <Arrow size={35} color='primary' />
        </Number>
        <div>
          <Typography variant='h4'>{props.question}</Typography>
          <HelperText>{props.help ? props.help : null}</HelperText>
        </div>
      </TopQuestion>
    </QuestionContainer>
  );
}
export default TheQuestion;
