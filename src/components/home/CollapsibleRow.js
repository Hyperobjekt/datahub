import React, { useState } from "react";

import clsx from  'clsx';

import {
  makeStyles,
  Box,
  Typography,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
} from "@material-ui/core";

import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  evenAlign: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& > *": {
      [theme.breakpoints.between('sm', 'md')]: {
        paddingRight: "20px"
      },
      [theme.breakpoints.up('md')]: {
        paddingRight: "40px"
      }
    }
  },
  info: {
    fontFamily: 'zeitung',

    width: '75%',
    marginTop: '2px', 
    marginBottom: '6px', 
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%',
      marginLeft: 0
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
      marginLeft: '6%'
    }
  },
  links: {
    fontFamily: 'zeitung',

    margin: '22px 0 22px 6%',
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '22px 0 22px 0',
    },
    [theme.breakpoints.up('md')]: {
      margin: '22px 0 22px 6%',
    },
    padding: '21px 32px', 
    background: '#FFF8ED'
  },
  bold: {
    fontWeight: 'bold',
    padding: 0
  },
  link: {
    fontFamily: 'source-code-pro',

    color: 'inherit',
    textDecoration: 'none'
  },
  quickLinks: {
    fontFamily: 'source-code-pro', 
    paddingBottom: '30px'
  },
  arrow: {
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  dropdownHighlight: {
    paddingBottom: 0, 
    paddingTop: 0
  }
}));

const CollapsibleRow = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  
  const { project, index } = props

  const convertToLink = (array) => {
    const links =
      array.map((data, i) => [
        !!i && ", ",
        <a href={data.link}>{data.set}</a>
      ])

    return links
  }

  const info = (
    <Box className={classes.info}>
      <Typography variant="subtitle1">
        {project.summary}
      </Typography>
      <Typography variant="subtitle1">
        Data sets: {convertToLink(project.data)}
      </Typography>
      <Typography variant="subtitle1">
        Authors: {project.authors.join(', ')}
      </Typography>
      <Typography variant="subtitle2">
        Filed under{" "}
        <Box component='span' className={classes.bold}>
          {" "}
          {project.topics.join(', ').toUpperCase()}{" "}
        </Box>
      </Typography>
    </Box>
  );

  const links = (
    <Box className={classes.links}>
      <Typography variant="h6" component="div">
        Quick Links
      </Typography>
      <Box className={clsx(classes.evenAlign, classes.quickLinks)}>
        <a className={classes.link} href={project.readme}>
          README
        </a>
        <a className={classes.link} href={project.preprint}>
          PREPRINT
        </a>
        <a className={classes.link} href={project.figures}>
          FIGURES
        </a>
      </Box>
      <Typography variant="h6" component="div">
        Join the Discussion
      </Typography>
      <a className={classes.link} href={project.discussion}>
        DISCUSS ON GITHUB
      </a>
    </Box>
  );

  return (
    <>
      <TableRow style={{ backgroundColor: index % 2 ? "#E8F5FF" : "#FFFFFF" }}>
        <TableCell className={classes.arrow}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
            {open ?
                <div>
                  <Box component='span' className={classes.bold}>
                    {project.name}
                  </Box>
                  <IconButton className={classes.arrowInline} size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </div> 
              :
                <div>
                  {project.name}
                  <IconButton className={classes.arrowInline} size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </div>
            }
        </TableCell>
        <TableCell>
          <Box className={classes.evenAlign}>
            <a>{project.date}</a>
            <a className={classes.link} href={project.repo}>
              REPO
            </a>
            <a className={classes.link} href={project.paper}>
              PUBLISHED PAPER
            </a>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ background: index % 2 ? "#E8F5FF" : "#FFFFFF" }}>
        <TableCell className={classes.dropdownHighlight} colSpan={6}>
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
