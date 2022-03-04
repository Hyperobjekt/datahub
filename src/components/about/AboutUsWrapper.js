import { Box, withStyles } from '@material-ui/core';

const AboutUsWrapper = withStyles((theme) => ({
  root: {
    '& .what-drives-us': {
      backgroundColor: '#E8F5FF',

      maxWidth: theme.spacing(90),
      padding: theme.spacing(3),
      margin: '0 0 40px 0',

      '& > :first-child': {
        justifyContent: 'center'
      },
      '& > *': {
        marginBottom: '15px',
      },
    },
  },
}))(Box);

export default AboutUsWrapper;
