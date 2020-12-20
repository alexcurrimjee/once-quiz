import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppRingForm from './components/AppRingForm';

import Layout from './components/Layout';
import { CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Button } from './components/_common/index';

import './App.scss';
import './_variables.scss';

const themeObject = {
  palette: {
    primary: { main: '#b98269' },
    type: 'light',
  },
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export default function App() {
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <div className='App'>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <Router>
          <Layout darkMode={toggleDarkMode}>
            <Switch>
              <Route path='/form'>
                <AppRingForm />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

function Home() {
  return (
    <div className='home-container'>
      <Typography variant='h4'>Choose your Quiz:</Typography>
      <Link to='/form'>
        <Button variant='contained' color='primary'>
          Find your Bridal Ring
        </Button>
      </Link>
      <Button variant='contained' color='primary' disabled>
        Build your Own Ring
      </Button>
      <Button variant='contained' color='primary' disabled>
        Personality Test
      </Button>
      <Button variant='contained' color='primary' disabled>
        Who is your Spirit Designer?
      </Button>
    </div>
  );
}
