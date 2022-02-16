import { makeStyles } from "@material-ui/core"

export const NewsPageStyles = makeStyles({
  newsPage: {
    margin: '0 auto',

    '& > :first-child': {
      margin: '0 0 20px 0'
    },
  },
  pageTitle: {
    fontWeight: 'bold'
  }
})

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
    objectFit: 'cover',

    margin: '0 20px 0 0'
  },
  copy: {
    fontSize: '1em',
    width: '380px',
    display: 'inline-block',

    verticalAlign: 'top'
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold'
  },
  lede: {
    fontFamily: 'zeitung',
    fontSize: '.95em',
  },
  source: {
    color: '#505050',

    fontFamily: 'zeitung',
    fontSize: '.7em',
    fontWeight: 'bold'
  }
}))