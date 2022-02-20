import React from 'react'

import {
  Typography,
  Box,
  Grid
} from "@material-ui/core";

import { OurTeamStyles } from './styles/AboutStyles';
import BlueBox from '../general/BlueBox';

const memberCard = (member, thumbnailStyles, itemStyles, copyStyles) => {

  const thumbnail = <img className={thumbnailStyles} src={member.thumbnail} alt={'Team member photo'} />
  const name = <Typography variant="overline">{member.name}</Typography>
  const bio = <Typography variant="caption">{member.bio}</Typography>

  return (
    <Grid>
      <BlueBox
        itemStyles={itemStyles}
        copyStyles={copyStyles}
        thumbnail={thumbnail}
        title={name}
        copy1={bio}
      /> 
    </Grid>
  )
}

const OurTeam = (props) => {
  const { team } = props

  const classes = OurTeamStyles()

  const memberCards = () => {

    const groupedTeam = team.reduce((all, one, i) => {
      const ch = Math.floor(i/3)
      all[ch] = [].concat((all[ch]||[]), one)
      return all
    }, [])
    
    return groupedTeam.map(team => {
      const teamRow =
        team.map(member => 
          memberCard(member, classes.thumbnail, classes.itemStyles, classes.copyStyles)
        )
      
      return <Grid container item xs={12}>{teamRow}</Grid>
    })
  }

  const cards = memberCards()

  return (
    <Box className={classes.blueContainer}>
      <Typography variant="overline">OUR TEAM</Typography>
      <Grid 
        container 
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {cards}
      </Grid>
    </Box>
  )
}

export default OurTeam