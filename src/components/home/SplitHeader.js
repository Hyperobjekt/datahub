import React from 'react'

import { 
  makeStyles,
  Box,
  Typography,
  Link
} from '@material-ui/core'

import headersObj from '../../../content/data/headers.json'

const useStyles = makeStyles(theme => ({
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    height: '600px'
  },
  panel: {
    margin: '0 auto',
    textAlign: 'center',

    backgroundColor: '#FFF8ED',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    width: '50%',
    height: '100%'
  },
  rightPanel: {
    margin: '0 auto',
    textAlign: 'center',
    
    backgroundColor: '#E4D3C3',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    width: '50%',
    height: '100%'
  },
  panelAlign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
    },
  }
}))

const SplitHeader = () => {
  const classes = useStyles()

  const leftPanel = headersObj.leftPanel[0]
  const rightPanel = headersObj.rightPanel[0]

  return (
    console.log(leftPanel, rightPanel),
    <Box className={classes.centerAlign}>
      <Box className={classes.panel}>
        <Box className={classes.panelAlign}>
          <Typography variant="h3" className="h3SplitHero">{leftPanel.heading}</Typography>
          <Typography variant="body1" className="body1SplitHero">{leftPanel.subheading}</Typography>
          <Link href={leftPanel.source[0].link}>
            <Typography variant="overline" className="overlineSplitHero">
            {leftPanel.source[0].copy}
            </Typography>
          </Link>
      </Box>
        </Box>
      <Box className={classes.rightPanel}>
        <Box className={classes.panelAlign}>
          <Typography variant="h3" className="h3SplitHero">{rightPanel.heading}</Typography>
          <Link href={rightPanel.source[0].link}>
            <Typography variant="body1" className="body1SplitHero">{rightPanel.source[0].copy}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SplitHeader
