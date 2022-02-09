import React from 'react'
import { makeStyles } from '@material-ui/core'

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

    height: '475px'
  },
  panel: {
    backgroundColor: '#FFF8ED',

    width: '100%',
    height: '100%'
  }
}))

const SplitHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.centerAlign}>
      <div className={classes.panel}></div>
      <div className={classes.panel} style={{background: '#484F55'}}></div>
    </div>
  )
}

export default SplitHeader
