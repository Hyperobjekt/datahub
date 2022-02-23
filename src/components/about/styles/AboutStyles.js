import { makeStyles } from "@material-ui/core"

export const AboutUsPage = makeStyles(theme => ({
  centerAlign: {
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
  },
  ourFriends: {
    width: "800px",
    [theme.breakpoints.down('md')]: {
      width: '400px',
    },

    marginTop: "20px"
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
  modal: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(70),
    maxHeight: theme.spacing(200),
    padding: theme.spacing(3),

    position: 'absolute',
    top: '50%',
    left: '50%',

    transform: 'translate(-50%, -50%)'
  },
  thumbnail: {
    width: '150px',
    height: '150px',
    marginRight: '10px'
  },
  itemStyles: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(40),
    padding: theme.spacing(3),
    margin: '0 0 10px 0'
  },
  modalItemStyles: {
    display: 'flex',
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(200),
    height: theme.spacing(40),
    padding: theme.spacing(2),

    margin: '0 0 10px 0'
  },
  copyStyles: {
    display: 'flex',
    flexDirection: 'column',

    padding: `theme.spacing(3) 0`,

    '& > *': {
      paddingBottom: theme.spacing(2)
    },
  },
  iconButton: {
    padding: 0,
    marginLeft: "2px",
    verticalAlign: "top",
  },
  icon: {
    color: "#064493",
  }
}))