import React from 'react';
import { Grid } from '@material-ui/core';
import RadioButton from './TheRadioButton';

function TheRadioGrid(props) {
  const { name, options, handleChange } = props;
  return (
    <Grid container spacing={1}>
      {options.map((value) => (
        <React.Fragment key={value.title}>
          {value.image ? (
            <Grid item xs={4}>
              <RadioButton
                value={value.value}
                onChange={handleChange}
                name={name}
                current={props.current}
                id={value.value}
                image={value.image}
                title={value.title}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={8}>
              <RadioButton
                value={value.value}
                onChange={handleChange}
                name={name}
                current={props.current}
                id={value.value}
                image={value.image}
                title={value.title}
              />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default TheRadioGrid;
