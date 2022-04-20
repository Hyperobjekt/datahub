import React from 'react'

import {
  Typography,
  Box,
  makeStyles,
  unstable_createMuiStrictModeTheme
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textBox: {
    //maxHeight: theme.spacing(15),
    maxWidth: theme.spacing(80),

    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      /* marginBottom: theme.spacing(10) */
    }
  }
}))

const HeroText = (props) => {
  const { 
    heading, 
    subheading,
    textBoxStyles
  } = props

  const classes = useStyles()
  
  return (
    <Box className={textBoxStyles ? textBoxStyles : classes.textBox}>
      <Typography variant="overline" className="overlineHero">{heading}</Typography>
      <Typography variant="h3" className="h3Hero">{subheading}</Typography>
    </Box>
  )
}

export default HeroText
