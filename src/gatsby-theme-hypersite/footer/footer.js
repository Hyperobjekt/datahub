import React from "react";
import {
  Container,
  Footer as BaseFooter,
  Navigation,
} from "@hyperobjekt/material-ui-website";
import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import GatsbyLink from "gatsby-link";
import { FONT, ALT_FONT } from "../../gatsby-theme-hypercore/theme";
import twitterIcon from '../../../static/icons/twitter.svg';

// add navigation styles to base navigation component
const FooterNavigation = withStyles((theme) => ({
  root: {
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  link: {
    color: theme.palette.common.white,
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))(Navigation);

// set footer colors and spacing
const styles = (theme) => ({
  root: {
    backgroundColor: "#1D2D39",
    padding: theme.spacing(12, 0),
    "& .MuiTypography-root": {
      color: theme.palette.common.white,
      fontFamily: ALT_FONT,
    },
    "& .footer__logoContainer": {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
    },
    "& .footer__logo": {
      width: '250px',
      height: '80px',
      [theme.breakpoints.down("md")]: {
        width: '200px',
        height: '68px'
      },
    },
    "& .footer__textContainer": {
      "& .MuiTypography-root": {
        maxWidth: theme.spacing(40),
        margin: "0 auto", // center in container
        [theme.breakpoints.up("md")]: {
          textAlign: "left",
          marginLeft: 0, // left align in container
          maxWidth: theme.spacing(64),
        },
      },
    },
    "& .footer__navContainer": {
      fontFamily: FONT,
      fontWeight: 'bold',
    },
    "& .footer__copyrightContainer": {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
    },
    "& .HypNavigation-link": {
      paddingBottom: '5px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    "& .HypNavigation-listItem": {
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center'
      },
    },
    textAlign: 'center',
    alignContent: 'center',
  },
});

const Footer = ({ copyright, links, social, ...props }) => {
  return (
    <BaseFooter {...props}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} className="footer__logoContainer">
            <img className="footer__logo" src="/images/hereLabLogoFooter.svg" alt="logo" />
          </Grid>
          <Grid item xs={12} md={6} className="footer__textContainer">
            <Typography variant="body2">
            Our website and logos draw on the data visualization style developed by sociologist W. E. B. Du Bois and his collaborators at the beginning of the 20th century. <a href="https://www.dignityanddebt.org/projects/du-boisian-resources/">The Du Boisian Visualization Tool Kit</a> from <a href="https://www.dignityanddebt.org/">Dignity + Debt</a> provides tutorials and code for data visualization in the Du Boisian style. 
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className="footer__navContainer">
            <FooterNavigation
              links={links}
              className="footer__navContainer"
              LinkComponent={GatsbyLink}
              isGatsbyLink={true}
            />
             <div className="social"><a href="https://twitter.com/HERE_Lab"><img src="/icons/twitter.svg" /></a></div>
          </Grid>
        </Grid>
        <Box mt={6} className="footer__copyrightContainer">
          <Typography variant="caption">{copyright}</Typography>
        </Box>
      </Container>
    </BaseFooter>
  );
};

export default withStyles(styles)(Footer);
