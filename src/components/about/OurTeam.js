import React, { useState } from 'react'

import {
  Typography,
  Box,
  Grid,
  IconButton,
  Modal,
  useMediaQuery
} from "@material-ui/core";

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { OurTeamStyles } from './styles/AboutStyles';
import BlueBox from '../general/BlueBox';

const OurTeam = (props) => {
  const { team } = props

  const classes = OurTeamStyles()
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"))
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [modal, setModal] = useState(false)
  const [modalBio, setModalBio] = useState()

  /**
  * Grided memberCard objects, popUp modals
  * @param {*} thumbail - thumbnail for member
  * @param {*} name - name from member object from CMS
  * @param {*} title - title from member object from CMS
  * @param {*} bio - bio from member object from CMS
  * @param {*} itemStyles - CSS for BlueBox
  * @returns {Grid[BlueBox]}
  */
  const memberCard = (thumbnail, name, title, bio, itemStyles) => {

    const memberName = <Typography variant="overline">{name}</Typography>
    const memberTitle = <Typography variant="caption" className="bold">{title}</Typography>
    const memberBio = <Typography variant="caption">{bio}</Typography>

    return (
      <Grid>
        <BlueBox
          itemStyles={itemStyles ? itemStyles : classes.itemStyles}
          copyStyles={classes.copyStyles}
          thumbnail={thumbnail}
          title={memberName}
          copy1={memberTitle}
          copy2={memberBio}
        />
      </Grid>
    )
  }

  //open modal handler
  const handleIconClick = (member) => {
    setModal(true)
    setModalBio(
      memberCard(
        <img className={classes.thumbnail} src={member.thumbnail} alt={'Team member photo'} />,
        member.name, 
        member.title,
        member.bio,
        classes.modalItemStyles
      )
    )
  }

  /**
  * Grided memberCard objects, popUp modals
  * @param {*} member - member object from CMS
  * @returns {Box[Thumbnail]}
  */
  const makeThumbnail = (member) =>
    <Box display="inline-block">
      <img className={classes.thumbnail} src={member.thumbnail} alt={'Team member photo'} />
      {!isSmallScreen &&
        <IconButton className={classes.iconButton} onClick={(e) => handleIconClick(member)}>
          <AddCircleIcon className={classes.icon} />
        </IconButton>
      }
    </Box>

  const memberCards = () => {

    const groupedTeam = team.reduce((all, one, i) => {
      const ch = isMediumScreen ? Math.floor(i/2) : Math.floor(i/3)
      all[ch] = [].concat((all[ch]||[]), one)
      return all
    }, [])

    return groupedTeam.map(team => {
      const teamRow =
        team.map(member => {
          const thumbnail = makeThumbnail(member)
          const bio = isSmallScreen ? member.bio : member.bio.slice(0, 100).concat('...')
          return memberCard(thumbnail, member.name, member.title, bio)
        })
      
      return teamRow.length === 1 ? 
        <Grid container item justifyContent="center" xs={12}>{teamRow}</Grid> :
        <Grid container item xs={12}>{teamRow}</Grid>
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
      <Modal
        disableAutoFocus
        disablePortal
        disableRestoreFocus
        open={modal}
        onClose={() => setModal(false)}
      >
        <Box className={classes.modal}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton className={classes.iconButton} onClick={() => setModal(false)}>
              <CancelIcon className={classes.icon} />
            </IconButton>
          </Box>
          {modalBio}
        </Box>
      </Modal>
    </Box>
  )
}

export default OurTeam