import { Box, withStyles } from '@material-ui/core';

export const MobileOnly = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))(Box)

export const MobileNot = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(Box)