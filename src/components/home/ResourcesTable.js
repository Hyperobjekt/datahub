import React, { useState, useEffect } from "react";

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
  TablePagination,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  useTheme,
} from "@material-ui/core";

import allProjects from '../../../content/data/projects.json'

const useStyles = makeStyles(theme => ({
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
  tableRow: {
    background: "#FFF8ED"
  },
  projectHeader: {
    [theme.breakpoints.down('md')]: {
      width: '20%'
    },
    [theme.breakpoints.up('md')]: {
      width: '10%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '45%'
    },
  }
}));

const ResourcesTable = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [topics, setTopics] = useState();
  const [sources, setSources] = useState();
  const [projects, setProjects] = useState();

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleTopicChange = (event) => {
    setSelectedTopics(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  const handleSourceChange = (event) => {
    setSelectedSources(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  const tableHeader = (
    <div className={classes.centerAlign}>
      <Typography variant="h6">ACTIVE PROJECTS</Typography>
      <div className={classes.evenAlign}>
        <Typography variant="subtitle1">Filter by:</Typography>
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={selectedTopics}
            onChange={handleTopicChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <a>Topic</a>;
              }

              return selected.join(", ");
            }}
            MenuProps={{ variant: "menu" }}
          >
            {topics &&            
              topics.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selectedTopics, theme)}
                >
                  {name}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl>
          <Select
            multiple
            displayEmpty
            value={selectedSources}
            onChange={handleSourceChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <a>Data Source</a>;
              }

              return selected.join(", ");
            }}
            MenuProps={{ variant: "menu" }}>
            {sources &&            
              sources.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selectedSources, theme)}
                >
                  {name}
                </MenuItem>
              ))
            }
            </Select>
        </FormControl>
      </div>
    </div>
  );

  const updateProjects = (toBeFiltered, topics, sources) => {
    let updatedProjects

    const comparator = (projectList, list) => {
      let intersection = projectList.filter(p => list.includes(p))

      return (intersection.length > 0) ? true : false
    }

    if (topics.length > 0 && sources.length > 0) {
      updatedProjects = 
        toBeFiltered
          .filter(p => comparator(p.topics, topics))
          .filter(p => comparator(p.data.map(d => d['set']), sources))
    } else {
      if (topics.length > 0) {
        updatedProjects = projects.filter(p => comparator(p.topics, topics))
      } else if (sources.length > 0) {
        updatedProjects = projects.filter(p => comparator(p.data.map(d => d['set']), sources))
      }
    }

    return updatedProjects
  }

  useEffect(() => {
    let toBeFiltered = (selectedProjects) ? selectedProjects : projects

    if (toBeFiltered) {
      const updatedProjects = updateProjects(toBeFiltered, selectedTopics, selectedSources)

      if (updatedProjects) {
        setSelectedProjects(updatedProjects)
      } else {
        setSelectedProjects()
      }
    }
  }, [selectedTopics, selectedSources])

  useEffect(() => {
    let projects = allProjects['projects']

    setProjects(projects)
    setTopics([...new Set(projects.map(p => p['topics']).flat())])
    setSources([...new Set(projects.map(p => p['data']).flat().map(d => d['set']))])
  }, [])

  const rows = (selectedProjects) ? selectedProjects : projects

  return (
    <>
      {tableHeader}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell style={{ width: "10%" }} />
              <TableCell className={classes.projectHeader}>Project Name</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map(project => (
                <CollapsibleRow 
                  index={rows.indexOf(project)} 
                  project={project}
                  key={project.id}
                />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows ? rows.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ResourcesTable;
