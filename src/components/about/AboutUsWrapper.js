import { Box, withStyles } from '@material-ui/core';

const AboutUsWrapper = withStyles((theme) => ({
  root: {
    '& .what-drives-us': {
      maxWidth: theme.spacing(90),
      padding: theme.spacing(6),
      margin: theme.spacing(2.5, 0, 5, 0),
    },
  },
}))(Box);

export default AboutUsWrapper;
