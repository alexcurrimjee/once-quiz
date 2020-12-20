import React from 'react';
import AppBar from './TheAppBar';

function Layout(props) {
  return (
    <div>
      <AppBar darkMode={props.darkMode} title={props.title} />
      {props.children}
    </div>
  );
}

export default Layout;
