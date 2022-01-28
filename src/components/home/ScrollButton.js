import React from 'react'

import {
  makeStyles,
  Box,
  Button
} from "@material-ui/core"

const useStyles = makeStyles({
  evenAlign: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& > *": {
      paddingRight: "40px",
    },
  },
  button: {
    borderColor: '#FFC101',
    borderRadius: '5em'
  },
  text: {
    color: '#FFC101'
  }
});

const ScrollButton = () => {
  const classes = useStyles()

  const handleClick = () => {
    const scrollTo = document.getElementById('scrollTo')

    scrollTo.scrollIntoView()
  }

  return (
    <Button 
      variant='outlined' 
      className={classes.button}
      onClick={handleClick}>
      <Box className={classes.text}>
        View Resources
      </Box>
    </Button>
  )
}

export default ScrollButton