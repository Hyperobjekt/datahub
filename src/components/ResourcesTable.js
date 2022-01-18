import React, { useState } from "react";

import CollapsibleRow from "./CollapsibleRow";

import {
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  useTheme,
} from "@material-ui/core";

import authors from '../../content/data/authors.json'

const useStyles = makeStyles({
  centerAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  evenAlign: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    margin: "25px 0 50px 0",

    "& > *": {
      paddingRight: "22px",
    },
  },
});

const ResourcesTable = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const rows = [0, 1, 2, 3, 4];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    setSelectedTopics(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  const names = ["Steph Curry", "Klay Thompson", "Draymond Green"];

  const tableHeader = (
    <div className={classes.centerAlign}>
      <Typography variant="h6">ACTIVE PROJECTS</Typography>
      <div className={classes.evenAlign}>
        <Typography variant="subtitle1">Flter by:</Typography>
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={selectedTopics}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <a>Topic</a>;
              }

              return selected.join(", ");
            }}
            MenuProps={{ variant: "menu" }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, selectedTopics, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={selectedSources}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <a>Data Source</a>;
              }

              return selected.join(", ");
            }}
            MenuProps={{ variant: "menu" }}
          ></Select>
        </FormControl>
      </div>
    </div>
  );

  return (
    console.log(authors),
    <>
      {tableHeader}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FFF8ED" }}>
              <TableCell style={{ width: "10%" }} />
              <TableCell style={{ width: "45%" }}>Project Name</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((i) => (
              <CollapsibleRow index={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResourcesTable;
