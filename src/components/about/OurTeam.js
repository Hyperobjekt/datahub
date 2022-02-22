import React, { useState } from 'react'

import {
  Typography,
  Box,
  Grid,
  IconButton,

} from "@material-ui/core";

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { OurTeamStyles } from './styles/AboutStyles';
import BlueBox from '../general/BlueBox';

/**
* Grided memberCard objects, popUp modals
* @param {*} member - member object from CMS
* @param {*} thumbailStyles - CSS class for highlighted div
* @param {*} itemStyles - CSS class for highlighted div
* @param {*} copyStyles - CSS class for highlighted div
* @returns {Grid[BlueBox]}
*/
const memberCard = (member, modalStyles, thumbnailStyles, itemStyles, copyStyles) => {
  const thumbnail =
    <Box display="inline-block">
      <img className={thumbnailStyles} src={member.thumbnail} alt={'Team member photo'} />
      {/* <IconButton onClick={() => setModal(true)}>
        <AddCircleIcon />
      </IconButton> */}
    </Box>

  const name = <Typography variant="overline">{member.name}</Typography>
  const title = <Typography variant="caption" className="bold">{member.title}</Typography>
  const modalBio = <Typography variant="caption">{member.bio}</Typography>
  const bio = <Typography variant="caption">{member.bio.slice(0, 100).concat('...')}</Typography>

  return (
    <Grid>
      <BlueBox
        itemStyles={itemStyles}
        copyStyles={copyStyles}
        thumbnail={thumbnail}
        title={name}
        copy1={title}
        copy2={bio}
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
          memberCard(member, classes.modalStyles, classes.thumbnail, classes.itemStyles, classes.copyStyles)
        )

      const gridItem =
        (teamRow.length < 2) ?
          <Grid container item alignItems="center" xs={12}>{teamRow}</Grid> : 
          <Grid container item xs={12}>{teamRow}</Grid>

      return gridItem
    })
  }

  return (
    <Box className={classes.blueContainer}>
      <Typography variant="overline">OUR TEAM</Typography>
      <Grid 
        container 
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {memberCards()}
      </Grid>
    </Box>
  )
}

export default OurTeam