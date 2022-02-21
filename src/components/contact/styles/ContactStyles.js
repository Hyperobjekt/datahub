import { makeStyles } from "@material-ui/core"

export const ContactPageStyles = makeStyles(theme => ({
  contactUs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    }
  },
  flexAlign: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    width: '100%',

    marginTop: '10px',
    marginBottom: '20px'
  },
  textField: {
    width: '100%',
    background: 'white',

    padding: '2px',
    marginTop: '10px'
  },
  textFieldMessage: {
    width: '100%',
    height: '200px',
    background: 'white',

    marginTop: '10px'
  },
  block: {
    background: '#E8F5FF'
  },
  submitButton: {
    borderColor: '#064493',
    borderRadius: '5em',

    marginTop: '20px'
  },
  submitButtonText: {
    color: '#064493',
    fontWeight: 'bold'
  }
}))