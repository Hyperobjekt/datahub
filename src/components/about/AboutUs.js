import React from 'react'

import {
  Typography,
  Box,
  useMediaQuery
} from "@material-ui/core";

import { Block, Hero } from '@hyperobjekt/material-ui-website'
import { AboutUsPage } from './styles/AboutStyles'
import BlueBox from '../general/BlueBox';
import OurTeam from './OurTeam'

import HereLabLogo from '../../../static/images/hereLabLogo.svg'
import AboutHero from "../../../static/graphics/heroAboutStatic.png"
import OurFriends from "../../../static/graphics/ourFriends.png"
import OurFriendsSmall from "../../../static/graphics/ourFriendsSmall.png"

import aboutUsObj from '../../../content/data/about.json'

/**
* Converts array to link or typography elements
* @param {*} hlText - CSS class for container
* @param {*} hlBox - CSS class for highlighted div
* @param {*} highlight - highlight text
* @param {*} lede - lede text
* @returns {Object[Box]}
*/
const HighlightedText = (hlText, hlBox, highlight, lede) => {
  
  return (
    <Box className={hlText}>
      <Box className={hlBox}>
        <Typography className="dhHlText">
          {highlight}
        </Typography>
      </Box>
      <Typography className="dhHlBody">
        {lede}
      </Typography>
    </Box>
  )
}

const AboutUs = () => {
  const classes = AboutUsPage()

  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"))

  const firstBlock = (firstBlock) => {
    const highlight = firstBlock.motive, lede = firstBlock.location

    return HighlightedText(classes.hlText, classes.hlBox, highlight, lede)
  }

  const secondBlock = (secondBlock) => {
    const title = <Typography variant="overline">WHAT DRIVES US TO DO THIS WORK?</Typography>
    const copy1 = <Typography variant="body2" className="bold">{secondBlock.drive}</Typography>
    const copy2 = <Typography variant="body2">{secondBlock.approach}</Typography>

    return (
      <BlueBox
        itemStyles={classes.itemStyles}
        copyStyles={classes.copyStyles}
        title={title}
        copy1={copy1}
        copy2={copy2}
      /> 
    )
  }

  const thirdBlock = (thirdBlock) => {
    const highlight = thirdBlock.motive, lede = thirdBlock.approach

    return HighlightedText(classes.hlText, classes.hlBox, highlight, lede)
  }

  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: "flex-start",
        }}
        alignItems="flex-end"
        image={AboutHero}
        bgcolor="#475865"
        color="grey.900"
        variant="overlay"
      />
      <Block>
        <Box className={classes.centerAlign}>
          <Box>
            <Typography variant='h5' className="bold">
              ABOUT US
            </Typography>
            {firstBlock(aboutUsObj.firstBlock[0])}
          </Box>
          {secondBlock(aboutUsObj.secondBlock[0])}
          {thirdBlock(aboutUsObj.thirdBlock[0])}
          <Box className={classes.logo}>
            <img className={classes.logoWidth} src={HereLabLogo} alt={'Here Lab logo'} />
            <Typography className="dhHlBody">{aboutUsObj.fourthBlock[0].positionOne}</Typography>
            <Typography className="dhHlBody">{aboutUsObj.fourthBlock[0].positionTwo}</Typography>
          </Box>
          <OurTeam team={aboutUsObj.team}/>
          <Box className={classes.centerAlign}>
            <Typography variant="overline">
              Our Friends
            </Typography>
            {isMediumScreen ?
              <img className={classes.ourFriends} src={OurFriendsSmall} alt={'Organizations we work with'} /> :
              <img className={classes.ourFriends} src={OurFriends} alt={'Organizations we work with'} />
            }
          </Box>
        </Box>
      </Block>
    </>
  )
}

export default AboutUs