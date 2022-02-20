import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import { OurTeamStyles } from './styles/AboutStyles';
import BlueBox from '../general/BlueBox';

const memberCard = (member, copyStyles) => {
  const thumbnail = <img style={{ width: '200px'}} src={member.thumbnail} alt={'Team member photo'} />
  const name = <Typography variant="overline">{member.name}</Typography>
  const bio = <Typography variant="caption">{member.bio}</Typography>

  return (
    <BlueBox
      copyStyles={copyStyles}
      thumbnail={thumbnail}
      title={name}
      copy1={bio}
    /> 
  )
}
const OurTeam = (props) => {
  const { team } = props

  const classes = OurTeamStyles()

  const memberCards = team.map(member => memberCard(member, classes.copyStyles))

  return (
    <Box className={classes.blueContainer}>
      <Typography variant="overline">OUR TEAM</Typography>
      <Box>
      {memberCards[0]}
      </Box>
    </Box>
  )
}

export default OurTeam