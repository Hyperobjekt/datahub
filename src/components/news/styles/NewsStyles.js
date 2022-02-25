import { makeStyles } from "@material-ui/core"

export const NewsPageStyles = makeStyles(theme => ({
  newsPage: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },

    '& > :first-child': {
      margin: '0 0 20px 0'
    },
  },
  textBoxStyles: {
    margin: '0 auto',
    textAlign: 'center',

    paddingBottom: theme.spacing(18)
  }
}))

export const NewsItemStyles = makeStyles(theme => ({
  item: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(90),
    padding: theme.spacing(3),
    margin: '0 0 40px 0'
  },
  thumbnail: {
    display: 'inline-block',

    width: '248px',
    height: '248px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
    objectFit: 'cover',

    margin: '0 20px 0 0'
  },
  copy: {
    fontSize: '1em',
    width: '380px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    display: 'inline-block',

    verticalAlign: 'top'
  }
}))