import { makeStyles } from "@material-ui/core"

import HomeHero from "../../../../static/graphics/heroHeaderStatic.png"

export const HomePageStyles = makeStyles(theme => ({
  hero: {
    height: "600px",
    width: "100%",

    alignItems: "flex-end",
    backgroundColor: "rgb(65 83 97)",
    background: `url(${HomeHero}) no-repeat top center fixed`,
    backgroundSize: "1440px 600px"
  }
}))

export const ResourcesTablesStyles = makeStyles(theme => ({
  centerAlign: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .MuiInputBase-root.Dh-inputFilterField': {
      background: '#E8F5FF',
      height: '40px',
      [theme.breakpoints.down('md')]: {
        width: '120px',
        marginRight: '10px',
      },
      [theme.breakpoints.up('md')]: {
        width: '200px',
      },
    }
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',

      margin: '25px 0 10px 0',
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

    margin: '25px 0 25px 0'
  },
  table: {
    '& .MuiTableCell-root.DhTable-projectHeader': {
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    '& .MuiTableCell-root.DhTable-dateHeader': {
      [theme.breakpoints.up('sm')]: {
        width: '10%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '5%',
      },
    },
    '& .MuiTableCell-root.DhTable-infoHeaders': {
      [theme.breakpoints.up('sm')]: {
        width: '10%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    '& .MuiTableCell-root.DhTable-collapseCol': {
      width: '3%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
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
  collapseContainer: {
    [theme.breakpoints.down('md')]: {
      margin: 0
    },
    margin: '0 60px'
  },
  links: {
    margin: '12px 0 22px 0',
    padding: '21px 32px',
    background: '#FFF8ED',
  },
  icon: {
    color: "#000000",
    [theme.breakpoints.down('md')]: {
      color: "#000000",
    },
  }
}))