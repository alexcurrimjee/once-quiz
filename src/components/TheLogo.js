import React from 'react';
import { useTheme } from '@material-ui/styles';
import { ReactComponent as OnceLogo } from '../assets/once-logo.svg';

function Logo() {
  const theme = useTheme();
  return <OnceLogo className={'once-logo ' + theme.palette.type} />;
}

export default Logo;
