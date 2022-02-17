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
 * @param {Array<Project>} projects - entire list of projects
 * @returns {Array<Projects>}
 */
const updateProjects = (topics, sources, projects) => {
  // if no topics or sources, no filtering needed, return all projects
  if (topics.length === 0 && sources.length === 0) return projects;
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
  return projects.filter((p) =>
    hasProjectOverlap(
      p.data.map((d) => d['set']),
      sources
    )
  );
};

const TopicSelect = ({ classes, topics, selected, onTopicsChange }) => {
  const theme = useTheme();
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return (
    <Select
      multiple
      displayEmpty
      value={selected}
      onChange={onTopicsChange}
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
            style={getStyles(name, selected, theme)}
          >
            {name}
          </MenuItem>
        ))}
    </Select>
  );
};

const ResourceTableHeader = ({
  classes,
  topics,
  selectedTopics,
  onTopicsChange,
  source,
  onSourcesChange,
}) => {
  return (
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
            <TopicSelect
              classes={classes}
              topics={topics}
              selected={selectedTopics}
              onTopicsChange={onTopicsChange}
            />
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
};

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
  };

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

  // if topics or sources have changed, update the projects
  useEffect(() => {
    const updatedProjects = updateProjects(
      selectedTopics,
      selectedSources,
      projects
    );
    setSelectedProjects(updatedProjects);
  }, [selectedTopics, selectedSources, projects, selectedProjects]);

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
                    key={project.id}
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
