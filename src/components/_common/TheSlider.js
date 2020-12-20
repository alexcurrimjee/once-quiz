import React from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const OnceSlider = withStyles({
  root: {
    height: 8,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
  },
  rail: {
    height: 8,
  },
  mark: {
    top: 9,
    width: 2,
    height: 16,
  },
  markLabel: {
    marginTop: 10,
  },
})(Slider);

function TheSlider(props) {
  return (
    <OnceSlider valueLabelDisplay='off' aria-label='once slider' {...props} />
  );
}
export default TheSlider;
