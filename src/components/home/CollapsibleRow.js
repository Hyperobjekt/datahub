import React, { useState } from "react";

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

const useStyles = makeStyles({
  evenAlign: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& > *": {
      paddingRight: "40px",
    },
  },
  info: {
    fontFamily: 'zeitung',

    width: 'calc(75%)', 
    marginTop: '2px', 
    marginBottom: '6px', 
    marginLeft: 'calc(10.5%)'
  },
  links: {
    fontFamily: 'zeitung',

    margin: '22px 0 22px calc(10.5%)', 
    padding: '21px 32px', 
    background: '#FFF8ED'
  },
  bold: {
    fontWeight: 'bold'
  }
});

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
        <span style={{ fontWeight: "750" }}>
          {" "}
          {project.topics.join(', ').toUpperCase()}{" "}
        </span>
      </Typography>
    </Box>
  );

  const links = (
    <Box className={classes.links}>
      <Typography variant="h6" component="div">
        Quick Links
      </Typography>
      <Box style={{ fontFamily: 'source-code-pro', paddingBottom: '30px' }} className={classes.evenAlign}>
        <a style={{ textDecoration: "none" }} href={project.readme}>
          README
        </a>
        <a style={{ textDecoration: "none" }} href={project.preprint}>
          PREPRINT
        </a>
        <a style={{ textDecoration: "none" }} href={project.figures}>
          FIGURES
        </a>
      </Box>
      <Typography variant="h6" component="div">
        Join the Discussion
      </Typography>
      <a style={{ fontFamily: 'source-code-pro', textDecoration: "none" }} href={project.discussion}>
        DISCUSS ON GITHUB
      </a>
    </Box>
  );

  return (
    <>
      <TableRow style={{ backgroundColor: index % 2 ? "#E8F5FF" : "#FFFFFF" }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>
          {open ?
            <Box className={classes.bold}>Project Name</Box> :
            'Project Name'
          }
        </TableCell>
        <TableCell>
          <Box className={classes.evenAlign}>
            <a>9/2/21</a>
            <a style={{ textDecoration: "none" }} href={project.repo}>
              REPO
            </a>
            <a style={{ textDecoration: "none" }} href={project.paper}>
              PUBLISHED PAPER
            </a>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ background: index % 2 ? "#E8F5FF" : "#FFFFFF" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
