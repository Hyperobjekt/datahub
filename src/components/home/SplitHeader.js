import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '500px'
  }
})

const SplitHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.centerAlign}>
      <div style={{ width: '50%', height: '100%', backgroundColor: '#FFF8ED' }}></div>
      <div style={{ width: '50%', height: '100%', backgroundColor: '#484F55'}}></div>
    </div>
  )
}

export default SplitHeader
