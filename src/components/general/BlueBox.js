import React from 'react';
import clsx from 'clsx';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E8F5FF',
    maxWidth: theme.spacing(70),
    padding: theme.spacing(3),
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

const BlueBox = ({ className, children, ...props }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)} {...props}>
      {children}
    </Box>
  );
};

export default BlueBox;
