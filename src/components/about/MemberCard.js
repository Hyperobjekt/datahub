import React from 'react';
import clsx from 'clsx';
import { Typography, Box, ButtonBase } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/styles';

/**
 * Wrapper for individual team member cards
 */
const MemberCardWrapper = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: 264,
    marginBottom: theme.spacing(2),
    // style overrides for displaying the full card in modal
    '&.mc_full': {
      maxWidth: '100%',
      flexDirection: 'row',
      '& .mc_icon': { display: 'none' },
      '& .mc_bio': { marginBottom: theme.spacing(2) },
      '& .mc_imageWrapper': { marginRight: theme.spacing(2) },
    },
    '& .mc_imageWrapper': {
      alignItems: 'flex-start',
      // add a focus state when the wrapper is a button
      '&.MuiButtonBase-root:focus': {
        outline: '2px solid #064493',
      },
    },
    '& .mc_icon': {
      marginLeft: theme.spacing(1),
      color: '#064493',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    '& .mc_thumbnail': {
      display: 'block',
      width: 150,
    },
    // block styling on text elements so each is on their own line
    '& .mc_name, & .mc_title, & .mc_bio': {
      display: 'block',
      marginBottom: theme.spacing(2),
    },
  },
}))(Box);

/**
 * Renders an individual team member card
 * - when `fullBio` or `full` is true, the full bio is shown (otherwise it is truncated to 100 chars)
 * - if `onOpenBio` is defined, the thumbnail is wrapped in a button with a + icon to indicate that the full bio can be shown
 */
const MemberCard = ({
  name,
  bio,
  thumbnail,
  title,
  full,
  fullBio,
  onOpenBio,
  ...props
}) => {
  // trim bio if full props are not set
  const bioText = full || fullBio ? bio : bio.slice(0, 100).concat('...');
  // if onOpenBio is defined, wrap the thumbnail in a button
  const ImageWrapper = typeof onOpenBio === 'function' ? ButtonBase : Box;
  return (
    <MemberCardWrapper className={clsx({ mc_full: full })} {...props}>
      <ImageWrapper className="mc_imageWrapper" onClick={onOpenBio}>
        <img className="mc_thumbnail" src={thumbnail} alt={`${name}'s photo`} />
        <AddCircleIcon
          aria-label={`Open full bio for ${name}`}
          className="mc_icon"
        />
      </ImageWrapper>
      <Box className="mc_contentWrapper">
        <Typography className="mc_name" variant="overline">
          {name}
        </Typography>
        <Typography className="mc_title bold" variant="caption">
          {title}
        </Typography>
        <Typography className="mc_bio" variant="caption">
          {bioText}
        </Typography>
      </Box>
    </MemberCardWrapper>
  );
};

export default MemberCard;
