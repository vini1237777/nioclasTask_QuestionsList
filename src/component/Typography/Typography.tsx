
import React from 'react';
import {Typography} from '@mui/material';



export const MuiTypography = ({  variant,children, ...otherProps }:any) => {
  return (
    <Typography
      {...otherProps}
      variant={variant}
      className={otherProps.className}
    >
      {children}
    </Typography>
  );
};
