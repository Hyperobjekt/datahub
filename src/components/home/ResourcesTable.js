import React, { useState, useEffect } from 'react';

import { ResourcesTablesStyles } from './styles/HomeStyles';
import CollapsibleRow from './CollapsibleRow';

import {
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
  Box,
  Button
} from '@material-ui/core';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import allProjects from '../../../content/data/projects.json';

/**
 * Returns true if there is an intersection between two projects
 * @param {*} projectList
 * @param {*} list
 * @returns
 */
const hasProjectOverlap = (projectList, list) => {
  return projectList.some((p) => list.includes(p));
};

/**
* Filters the projects to include selected topics and sources
* @param {*} topics - array of topics to include projects for
* @param {*} sources - array of source to include project for
* @returns {Array<Projects>}
*/
const updateProjects = (topics, sources, projects) => {
  // if filtering topics and sources, filter the projects by topic + sources
  if (topics.length > 0 && sources.length > 0)
    return projects.filter(
      (p) =>
        hasProjectOverlap(p.topics, topics) &&
        hasProjectOverlap(
          p.data.map((d) => d['set']),
          sources
        )
    );
  // if topics but no sources, filter by topic
  if (topics.length > 0)
    return projects.filter((p) => hasProjectOverlap(p.topics, topics));
  // if sources but no topics, filter by source
  if (sources.length > 0)
    return projects.filter((p) =>
      hasProjectOverlap(
        p.data.map((d) => d['set']),
        sources
      )
    );
  //default return
  return projects;
};

const ResourcesTable = () => {
  const classes = ResourcesTablesStyles();
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
  };

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
      typeof event.target.value === 'string'
        ? event.target.value.split(',')
        : event.target.value
    );
  };

  const handleSourceChange = (event) => {
    setSelectedSources(
      typeof event.target.value === 'string'
        ? event.target.value.split(',')
        : event.target.value
    );
  };

  const handleClear = () => {
    setSelectedTopics([])
    setSelectedSources([])
  }

  const tableHeader =
    <Box className={classes.centerAlign}>
      <Typography variant="h6" className="bold">RESOURCES</Typography>
      <Box className={classes.filterGroup}>
        <Typography variant="subtitle1">Filter by:</Typography>
        <Box className={classes.evenAlign}>
          <FormControl>
            <Select
              multiple
              displayEmpty
              value={selectedTopics}
              onChange={handleTopicChange}
              input={<OutlinedInput className="Dh-inputFilterField" />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <Typography variant="body2">Topic</Typography>;
                }

                return selected.join(', ');
              }}
              MenuProps={{ variant: 'menu' }}
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
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <Select
              multiple
              displayEmpty
              value={selectedSources}
              onChange={handleSourceChange}
              input={<OutlinedInput className="Dh-inputFilterField" />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <Typography variant="body2">Data Source</Typography>;
                }

                return selected.join(', ');
              }}
              MenuProps={{ variant: 'menu' }}
            >
              {sources &&
                sources.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, selectedSources, theme)}
                  >
                    <Typography variant="body2">{name}</Typography>
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          {(selectedTopics.length > 0 || selectedSources.length > 0) &&
            <Button onClick={handleClear} className="dhTable-clearAll">
              <HighlightOffIcon />
            </Button>
          }
        </Box>
      </Box>
    </Box>

  // if topics or sources have changed, update the projects
  useEffect(() => {
    const updatedProjects = updateProjects(selectedTopics, selectedSources, projects)

    updatedProjects ? setSelectedProjects(updatedProjects) : setSelectedProjects()

  }, [selectedTopics, selectedSources, projects]);

  // on component mount, set the available projects, topics, and sources
  useEffect(() => {
    let projects = allProjects['projects'];

    setProjects(projects);
    setTopics([...new Set(projects.map((p) => p['topics']).flat())]);
    setSources([
      ...new Set(
        projects
          .map((p) => p['data'])
          .flat()
          .map((d) => d['set'])
      ),
    ]);
  }, []);

  const rows = selectedProjects ? selectedProjects : projects;

  return (
    <>
      {tableHeader}
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className="DhTable-collapseCol" />
              <TableCell className="DhTable-projectHeader">          
                <Typography variant="body2" className="bold">
                  Project Name
                </Typography>
              </TableCell>
              <TableCell className="DhTable-dateHeader">          
                <Typography variant="body2" className="bold">
                  Date
                </Typography>
              </TableCell>
              <TableCell className="DhTable-infoHeaders"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((project) => (
                  <CollapsibleRow
                    index={rows.indexOf(project)}
                    project={project}
                    key={rows.indexOf(project)}
                  />
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="Dh-inputFieldPagination"
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
