import { Box, withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))(Box);
