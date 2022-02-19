import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import { Block, Hero } from '@hyperobjekt/material-ui-website'
import { AboutUsPage } from './styles/AboutStyles'
import OurTeam from './OurTeam'

import aboutUs from '../../../content/data/about.json'

const HighlightedText = (highlight, lede) => {
  
  return (
    <>
    </>
  )
}

const AboutUs = () => {
  const classes = AboutUsPage()

  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: "flex-start",
        }}
        alignItems="flex-end"
        bgcolor="#475865"
        color="grey.900"
        variant="overlay"
      >
      </Hero>

      <Block>
        <Box className={classes.aboutUs}>
          <Typography variant='h5'>
              ABOUT US
          </Typography>
        </Box>
      </Block>
    </>
  )
}

export default AboutUs