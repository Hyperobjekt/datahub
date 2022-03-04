import React, { useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Modal,
  useMediaQuery,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { OurTeamStyles } from './styles/AboutStyles';
import { withStyles } from '@material-ui/styles';
import MemberCard from './MemberCard';

/**
 * Wrapper for all team member cards, displays them side-by-side as width allows
 */
const MemberCardsWrapper = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 40,
    gap: 24,
    justifyContent: 'center',
    maxWidth: 585,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 890,
    },
  },
}))(Box);

const OurTeam = (props) => {
  const { team } = props;
  const classes = OurTeamStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  // determines whether the modal is open or closed
  const [modal, setModal] = useState(false);
  // determines which member is shown in the modal
  const [activeMember, setActiveMember] = useState();
  // open modal handler
  const handleOpenBio = (member) => (event) => {
    setModal(true);
    setActiveMember(member);
  };

  return (
    <Box className={classes.blueContainer}>
      <Typography variant="overline">OUR TEAM</Typography>
      <MemberCardsWrapper>
        {team.map((member, i) => (
          <MemberCard
            key={i}
            {...member}
            fullBio={isSmallScreen}
            onOpenBio={isSmallScreen ? undefined : handleOpenBio(member)}
          />
        ))}
      </MemberCardsWrapper>
      <Modal
        disableAutoFocus
        disablePortal
        disableRestoreFocus
        open={modal}
        onClose={() => setModal(false)}
      >
        <Box className={classes.modal}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              className={classes.iconButton}
              onClick={() => setModal(false)}
            >
              <CancelIcon className={classes.icon} />
            </IconButton>
          </Box>
          <MemberCard full {...activeMember} />
        </Box>
      </Modal>
    </Box>
  );
};

export default OurTeam;
