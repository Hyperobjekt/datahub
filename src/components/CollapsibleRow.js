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
});

const CollapsibleRow = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const info = (
    <Box width="75%" mt={0.5} mb={1}>
      <Typography variant="subtitle2">
        Filed under{" "}
        <span style={{ fontWeight: "750" }}>
          {" "}
          PRIMARY TOPIC, SECONDARY TOPIC{" "}
        </span>
      </Typography>
      <Typography variant="subtitle1">
        Project summary. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Typography variant="subtitle1">
        Data sets: Data Set 1, Data Set 2
      </Typography>
      <Typography variant="subtitle1">
        Authors: John Appleseed, Charlie Eaton, Laura Hamilton
      </Typography>
    </Box>
  );

  const links = (
    <Box>
      <Typography variant="h6" component="div">
        Quick Links
      </Typography>
      <Box className={classes.evenAlign}>
        <a style={{ textDecoration: "none" }} href={"https://google.com"}>
          README
        </a>
        <a style={{ textDecoration: "none" }} href={"https://google.com"}>
          PREPRINT
        </a>
        <a style={{ textDecoration: "none" }} href={"https://google.com"}>
          FIGURES
        </a>
      </Box>
      <Typography variant="h6" component="div">
        Join the Discussion
      </Typography>
      <a style={{ textDecoration: "none" }} href={"https://google.com"}>
        DISCUSS ON GITHUB
      </a>
    </Box>
  );

  return (
    <>
      <TableRow
        style={{ backgroundColor: props.index % 2 ? "#E8F5FF" : "#FFFFFF" }}
      >
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>Project Name</TableCell>
        <TableCell>
          <Box className={classes.evenAlign}>
            <a>9/2/21</a>
            <a style={{ textDecoration: "none" }} href={"https://google.com"}>
              REPO
            </a>
            <a style={{ textDecoration: "none" }} href={"https://google.com"}>
              PUBLISHED PAPER
            </a>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ background: props.index % 2 ? "#E8F5FF" : "#FFFFFF" }}>
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
