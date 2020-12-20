import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, IconButton } from '@material-ui/core';
import { Moon, BrightnessHighFill } from 'react-bootstrap-icons';

import Logo from './TheLogo';
import { useTheme } from '@material-ui/core/styles';

// ------ STYLING -----
const StyledAppbar = styled(AppBar)`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
`;

const BackLink = styled(Link)`
  width: 33.33%;
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 2px;
  & svg {
    margin-right: 10px;
  }
`;

const LogoContainer = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 33.33%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: row;
  & button {
    margin-right: 16px;
  }
`;

const IconStyled = styled(IconButton)`
  color: #ccc;
`;
// --------------------

export default function TheAppBar(props) {
  const theme = useTheme();
  return (
    <StyledAppbar position='fixed' elevation={0} color='inherit'>
      <BackLink to='/'>
        <h4>EXIT</h4>
      </BackLink>

      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonContainer>
        <IconStyled onClick={props.darkMode}>
          {theme.palette.type === 'light' ? <Moon /> : <BrightnessHighFill />}
        </IconStyled>
      </ButtonContainer>
    </StyledAppbar>
  );
}
