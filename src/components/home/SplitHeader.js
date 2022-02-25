import React from 'react'

import { 
  makeStyles,
  Box,
  Typography,
  Link
} from '@material-ui/core'

import TertiaryHero from '../../../static/graphics/tertiaryHero.svg'

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
    backgroundColor: '#FFF8ED',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    width: '50%',
    height: '100%'
  },
  rightPanel: {
    backgroundColor: '#E4D3C3',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    width: '50%',
    height: '100%'
  }
}))

const SplitHeader = () => {
  const classes = useStyles()

  return (
    <Box className={classes.centerAlign}>
      <Box className={classes.panel}>
        <Typography></Typography>
        <Typography></Typography>
        <Link></Link>
        <Link></Link>
      </Box>
      <Box className={classes.rightPanel}>
        <Typography></Typography>
        <Link></Link>
      </Box>
    </Box>
  )
}

export default SplitHeader
