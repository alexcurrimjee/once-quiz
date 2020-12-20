import React from 'react';
import { Grid } from '@material-ui/core';
import Checkbox from './TheCheckBox';

function TheCheckGrid(props) {
  const { options, handleChange } = props;
  return (
    <Grid container spacing={1}>
      {options.map((value) => (
        <React.Fragment key={value.title}>
          {value.image ? (
            <Grid item xs={4} spacing={3}>
              <Checkbox
                checked={value.value}
                onChange={handleChange}
                name={value.name}
                image={value.image}
                title={value.title}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={8}>
              <Checkbox
                checked={value.value}
                onChange={handleChange}
                name={value.name}
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

export default TheCheckGrid;
