import React, { useState } from 'react';

import { CollapsibleRowStyles } from './styles/HomeStyles';
import LinkIcon from '../../../static/icons/link.svg'
import Chat from '../../../static/icons/chat.svg'
import { MobileOnly, MobileNot } from '../general/MobileStyles';

import {
  Box,
  Typography,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Link
} from '@material-ui/core';

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

/**
* Converts array to link or typography elements
* @param {*} array - array of topics to include projects for
* @param {*} type - data or topic
* @returns {Array<Links>}
*/
const convertToCommaSeparated = (array, type) => {
  if (type === 'data') {
    return array.map((data, i) => [
        !!i && ', ',
        <Link href={data.link} className="dhTopicsDataSets">
            {data.set.toUpperCase()}
        </Link>
      ]);
  }

  return (
    <Typography display="inline" className="dhTopicsDataSets">
      {array.join(", ").toUpperCase()}
    </Typography>
  );
};

const CollapsibleRow = (props) => {
  const classes = CollapsibleRowStyles();

  const [open, setOpen] = useState(false);

  const { project, index } = props;

  const info = (
    <>
      <Typography variant="body2" className="margin">
        {project.summary}
      </Typography>
      <Typography variant="body2" className="margin">
        Authors: {project.authors.join(', ')}
      </Typography>
      <Typography variant="subtitle1">
        Data sets: {convertToCommaSeparated(project.data, 'data')}
      </Typography>
      <Typography variant="subtitle1">
        Filed under: {convertToCommaSeparated(project.topics, 'topic')}
      </Typography>
    </>
  );

  const links = (
    <Box className={classes.links}>
      <Typography variant="h6" className="bold">
        Get Help with the Data
      </Typography>
      <MobileOnly>
        <Box className={classes.evenAlign}>
          <Box className={classes.evenAlign}>
            <img src={LinkIcon} alt="chatIcon" />
            <Link href={project.repo}>
              <Typography className="dhTableRow">REPO</Typography>
            </Link> 
          </Box>
          <Box className={classes.evenAlign}>
            <img src={LinkIcon} alt="chatIcon" />
            {project.manuscript ?
              <Link href={project.manuscript}>
                <Typography className="dhTableRow">MANUSCRIPT</Typography>
              </Link> :
              <Typography className="dhTableRow">MANUSCRIPT</Typography>
            }           
          </Box>
        </Box>
      </MobileOnly>
      <Box className={classes.evenAlign}>
        <img src={Chat} alt="chatIcon" />
        <Link href={project.discussion}>
          <Typography className="dhTableRow">ASK A QUESTION ON GITHUB</Typography>
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      <TableRow style={{ backgroundColor: index % 2 ? '#E8F5FF' : '#FFFFFF' }}>
        <TableCell className="DhTable-collapseCol">
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
          {open ? (
            <Box className={classes.evenAlign}>
              <Typography onClick={() => setOpen(!open)} variant="body2" className="bold">
                {project.name}
                <IconButton
                  className="DhTable-collapseRow"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </Typography>
            </Box>
          ) : (
            <Box className={classes.evenAlign}>
              <Typography onClick={() => setOpen(!open)} variant="body2">
                {project.name}
                <IconButton
                  className="DhTable-collapseRow"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </Typography>
            </Box>
          )}
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {project.date}
          </Typography>
        </TableCell>
        <MobileNot>
        <TableCell>
        <Typography variant="body2">
          <Box className={classes.evenAlign}>
            <Box className={classes.evenAlign}>
              <img src={LinkIcon} alt="chatIcon" />
              <Link href={project.repo}>
                <Typography className="dhTableRow">REPO</Typography>
              </Link> 
            </Box>
            <Box className={classes.evenAlign}>
              <img src={LinkIcon} alt="chatIcon" />
              {project.manuscript ?
                <Link href={project.manuscript}>
                  <Typography className="dhTableRow">MANUSCRIPT</Typography>
                </Link> :
                <Typography className="dhTableRow">MANUSCRIPT</Typography>
              }           
            </Box>
          </Box>
        </Typography>
        </TableCell>
        </MobileNot>
      </TableRow>
      <TableRow style={{ padding: '0', background: index % 2 ? '#E8F5FF' : '#FFFFFF' }}>
        <TableCell className="DhTable-collapseHl" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.collapseContainer}>
              {info}
              {links}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CollapsibleRow;
