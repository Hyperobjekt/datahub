import { makeStyles } from "@material-ui/core"

export const AboutUsPage = makeStyles(theme => ({
  aboutUs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    }
  },
  itemStyles: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(90),
    padding: theme.spacing(3),
    margin: '20px 0 40px 0'
  },
  copyStyles: {
    display: 'flex',
    flexDirection: 'column',

    padding: theme.spacing(3),

    '& > :first-child': {
      textAlign: 'center'
    },
    '& > *': {
      paddingBottom: theme.spacing(2)
    },
  },
  hlText: {
    maxWidth: theme.spacing(70),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      maxWidth: theme.spacing(40),
      marginTop: theme.spacing(1),
    },
  },
  hlBox: {
    width: '587px',
    paddingBottom: theme.spacing(1),
    borderBottom: '.3em solid',
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      width: '300px',
      paddingBottom: theme.spacing(1),
      borderBottom: '.2em solid',
      marginBottom: theme.spacing(1)
    },
  },
  logo: {
    width: '587px',
    margin: '50px 0 0 0',

    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },

    '& > *': {
      paddingBottom: '15px'
    },
  },
  blueContainer: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(70),
    padding: theme.spacing(3),
    margin: '0 0 40px 0'
  }
}))

export const OurTeamStyles = makeStyles(theme => ({
  blueContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(150),
    padding: theme.spacing(3),
    margin: '0 0 40px 0'
  },
  thumbnail: {
    width: '150px'
  },
  itemStyles: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(40),
    padding: theme.spacing(3),
    margin: '0 0 40px 0'
  },
  copyStyles: {
    display: 'flex',
    flexDirection: 'column',

    padding: `theme.spacing(3) 0`,

    '& > *': {
      paddingBottom: theme.spacing(2)
    },
  }
}))