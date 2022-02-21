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

    marginBottom: '10px'
  },
  textField: {
    width: '500px',
    background: 'white',

    marginTop: '10px'
  },
  textFieldMessage: {
    width: '500px',
    height: '200px',
    background: 'white',

    marginTop: '10px'
  },
  block: {
    background: '#E8F5FF'
  },
  submitButton: {
    borderColor: '#064493',
    borderRadius: '5em'
  },
  submitButtonText: {
    textColor: '#064493'
  }
}))