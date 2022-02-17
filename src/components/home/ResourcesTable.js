import React, { useState, useEffect } from 'react';

import CollapsibleRow from './CollapsibleRow';

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
  Box,
} from '@material-ui/core';

import allProjects from '../../../content/data/projects.json';
import MobileOnly from '../MobileOnly';

const useStyles = makeStyles((theme) => ({
  centerAlign: {
    fontFamily: 'zeitung',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  evenAlign: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center',

      '& > *': {
        padding: 'none',
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      '& > *': {
        padding: 'none',
      },
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      '& > *': {
        paddingRight: '22px',
      },
    },

    margin: '25px 0 50px 0',
  },
  table: {
    '& .MuiTableCell-root.DhTable-projectHeader': {
      fontFamily: 'zeitung',
      [theme.breakpoints.between('md', 'lg')]: {
        width: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    '& .MuiTableCell-root.DhTable-dateHeader': {
      [theme.breakpoints.between('md', 'lg')]: {
        width: '50%',
      },
      [theme.breakpoints.down('xs')]: {
        width: '10%',
      },
    },
    '& .MuiTableCell-root.DhTable-collapseCol': {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'table-cell',
      },
    },
    '& .MuiButtonBase-root.DhTable-collapseRow': {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    '& .MuiTableCell-root.DhTable-collapseHl': {
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
  tableRow: {
    background: '#FFF8ED',
  },
  dropdown: {
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'none',
    },
    width: '5%',
  },
  projectHeader: {},
  dateHeader: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  },
  select: {
    '& > :first-child': {
      paddingRight: '22px',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
}));

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

  const tableHeader = (
    <div className={classes.centerAlign}>
      <Typography variant="h6">
        <MobileOnly>
          <Box className={classes.bold}>RESOURCES</Box>
        </MobileOnly>
      </Typography>
      <div className={classes.evenAlign}>
        <Typography variant="subtitle1">Filter by:</Typography>
        <div className={classes.select}>
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
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <a>Data Source</a>;
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
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );

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
                Project Name
              </TableCell>
              <TableCell className="DhTable-dateHeader">Date</TableCell>
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
