import React, { useState } from 'react';

import { CollapsibleRowStyles } from './styles/HomeStyles';
import LinkIcon from '../../../static/icons/link.svg'
import Chat from '../../../static/icons/chat.svg'

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

const CollapsibleRow = (props) => {
  const classes = CollapsibleRowStyles();

  const [open, setOpen] = useState(false);

  const { project, index } = props;

  const convertToLink = (array) => {
    const links = array.map((data, i) => [
      !!i && ', ',
      <Link href={data.link}>
        <Typography variant="subtitle2">
          {data.set}
        </Typography>
      </Link>
    ]);

    return links;
  };

  const info = (
    <Box className={classes.info}>
      <Typography variant="subtitle1">{project.summary}</Typography>
      <Typography variant="subtitle1">
        Data sets: {convertToLink(project.data)}
      </Typography>
      <Typography variant="subtitle1">
        Authors: {project.authors.join(', ')}
      </Typography>
      <Typography variant="subtitle2">
        Filed under{' '}
        <Typography variant="subtitle2" className="bold">
          {project.topics.join(', ').toUpperCase()}{' '}
        </Typography>
      </Typography>
    </Box>
  );

  const links = (
    <Box className={classes.links}>
      <Typography variant="h6" component="div">
        Get Help with the Data
      </Typography>
      <Box className={classes.evenAlign}>
        <img src={Chat} alt="chatIcon" />
        <Link href={project.discussion}>
          <Typography>ASK A QUESTION ON GITHUB</Typography>
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
            <div>
              <Typography variant="body2" className="bold">
                {project.name}
              </Typography>
              <IconButton
                className="DhTable-collapseRow"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </div>
          ) : (
            <div>
              <Typography variant="body2">{project.name}</Typography>
              <IconButton
                className="DhTable-collapseRow"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </div>
          )}
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {project.date}
          </Typography>
        </TableCell>
        <TableCell>
        <Typography variant="body2">
          <Box className={classes.evenAlign}>
            <img src={LinkIcon} alt="chatIcon" />
            <Link href={project.repo}>
              <Typography variant="body2" className='sourceCode'>REPO</Typography>
            </Link> 
          </Box>
        </Typography>
        </TableCell>
        <TableCell>
          <Box className={classes.evenAlign}>
            <img src={LinkIcon} alt="chatIcon" />
            {project.manuscript ?
              <Link href={project.manuscript}>
                <Typography variant="body2" className='sourceCode'>MANUSCRIPT</Typography>
              </Link> :
              <Typography variant="body2" className="sourceCode">MANUSCRIPT</Typography>
            }           
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ padding: '0', background: index % 2 ? '#E8F5FF' : '#FFFFFF' }}>
        <TableCell className="DhTable-collapseHl" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {info}
            {links}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CollapsibleRow;
