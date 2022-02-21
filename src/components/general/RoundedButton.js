import React from 'react'

import {
  makeStyles,
  Box,
  Button
} from "@material-ui/core"

const useStyles = makeStyles({
  button: {
    borderColor: '#FFC101',
    borderRadius: '5em'
  },
  text: {
    color: '#FFC101'
  }
});

const RoundedButton = (props) => {
  const {
    handleClick,
    buttonStyles, 
    text,
    textStyles
  } = props

  const classes = useStyles()

  return (
    <Button
      variant='outlined' 
      className={buttonStyles ? buttonStyles : classes.button}
      onClick={handleClick}>
      <Box className={textStyles ? textStyles : classes.text}>
        {text}
      </Box>
    </Button>
  )
}

export default RoundedButton