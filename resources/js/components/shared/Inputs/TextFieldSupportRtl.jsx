import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

// Define custom styles using withStyles, accessing props dynamically
const TextFieldSupportRtl = withStyles({
  root: {
    '& .MuiInputLabel-root': {
      right: (props) => (props.direction === 'rtl' ? 0 : 'auto'),
      left: (props) => (props.direction === 'ltr' ? 0 : 'auto'),
      transformOrigin: (props) =>
        props.direction === 'rtl' ? 'right center' : 'left center',
    },
    '& .MuiOutlinedInput-root': {
      '& $notchedOutline': {
        borderStartWidth: (props) => (props.direction === 'rtl' ? 1 : 'auto'),
        borderEndWidth: (props) => (props.direction === 'ltr' ? 1 : 'auto'),
        borderLeftWidth: (props) => (props.direction === 'ltr' ? 1 : 'auto'),
        borderRightWidth: (props) => (props.direction === 'rtl' ? 1 : 'auto'),
      },
    },
  },
})(TextField);

export default TextFieldSupportRtl;

