import { makeStyles } from "@material-ui/core"

export const NewsPageStyles = makeStyles({
  newsPage: {
    width: '786px',

    margin: '0 auto'
  },
  pageTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
})

export const NewsItemStyles = makeStyles({
  item: {
    backgroundColor: '#E8F5FF',
    width: '786px',
    height: '324px',

    padding: '34px 65px 42px 65px',
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
})