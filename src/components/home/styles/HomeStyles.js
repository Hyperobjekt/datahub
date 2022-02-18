import { makeStyles, useTheme } from "@material-ui/core"

export const ResourcesTablesStyles = makeStyles(theme => ({
  centerAlign: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .MuiInputBase-root.Dh-inputFilterField': {
      [theme.breakpoints.down('md')]: {
        width: '120px',
      },
    }
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'baseline',

      '& > *': {
        paddingRight: '22px',
      },
    },
    margin: '25px 0 50px 0',
  },
  evenAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& > :first-child': {
      [theme.breakpoints.down('md')]: {
        paddingRight: '12px'
      },
      [theme.breakpoints.up('md')]: {
        paddingRight: '22px'
      },
    },

    margin: '25px 0 50px 0'
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
    }
  },
  tableRow: {
    background: '#FFF8ED',
  },
  dateHeader: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
  }
}))

export const CollapsibleRowStyles = makeStyles(theme => ({
  evenAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > :first-child': {
      paddingRight: '10px'
    },
  },
  info: {
    fontFamily: 'zeitung',

    width: '75%',
    marginTop: '2px',
    marginBottom: '6px',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%',
      marginLeft: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
      marginLeft: '6%',
    },
  },
  links: {
    margin: '22px 0 22px 6%',
    [theme.breakpoints.between('sm', 'md')]: {
      margin: '22px 0 22px 0',
    },
    [theme.breakpoints.up('md')]: {
      margin: '22px 0 22px 6%',
    },
    padding: '21px 32px',
    background: '#FFF8ED',
  }
}))