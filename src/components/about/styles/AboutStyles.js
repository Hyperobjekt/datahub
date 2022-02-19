import { makeStyles } from "@material-ui/core"

export const AboutUsPage = makeStyles(theme => ({
  aboutUs: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    }
  }
}))