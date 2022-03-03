import { Box, withStyles } from '@material-ui/core';

const BlueBoxCopy = withStyles((theme) => ({
  root: {
    fontSize: '1em',
    width: '380px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    display: 'inline-block',
    verticalAlign: 'top',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
}))(Box);

export default BlueBoxCopy;
