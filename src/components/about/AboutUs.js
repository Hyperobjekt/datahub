import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import OurTeam from './OurTeam'

const HighlightedText = (highlight, lede) => {
  
  return (
    <>
      <Typography variant='h4'>
        <Box component='span'>
          ABOUT US
        </Box>
      </Typography>
      <Typography variant='body1'>
        <Box component='span'>
          ABOUT US
        </Box>
      </Typography>
    </>
  )
}

const AboutUs = () => {
  return (
    <>
      <Typography variant='h5'>
        <Box component='span'>
          ABOUT US
        </Box>
      </Typography>
    </>
  )
}

export default AboutUs