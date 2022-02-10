import React from "react";
import {
  Container,
  Footer as BaseFooter,
  Navigation,
} from "@hyperobjekt/material-ui-website";
import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import GatsbyLink from "gatsby-link";
import { ALT_FONT } from "../../gatsby-theme-hypercore/theme";

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
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(12, 0),
    "& .MuiTypography-root": {
      color: theme.palette.common.white,
      fontFamily: ALT_FONT,
    },
    "& .footer__logoContainer": {},
    "& .footer__textContainer": {
      "& .MuiTypography-root": {
        maxWidth: theme.spacing(40),
        margin: "auto", // center in container
        [theme.breakpoints.up("md")]: {
          textAlign: "left",
          marginLeft: 0, // left align in container
          maxWidth: theme.spacing(64),
        },
      },
    },
    "& .footer__navContainer": {
      justifyContent: "center",
      alignItems: "center",
    },
    "& .footer__copyrightContainer": {},
  },
});

const Footer = ({ copyright, links, social, ...props }) => {
  return (
    <BaseFooter {...props}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} className="footer__logoContainer">
            <img src="/images/datahub_logo.png" alt="logo" />
          </Grid>
          <Grid item xs={12} md={6} className="footer__textContainer">
            <Typography variant="body2">
              Data Hub is Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className="footer__navContainer">
            <FooterNavigation
              links={links}
              LinkComponent={GatsbyLink}
              isGatsbyLink={true}
            />
          </Grid>
        </Grid>
        <Box mt={6} className="footer__copyrightContainer">
          <Typography variant="body2">{copyright}</Typography>
        </Box>
      </Container>
    </BaseFooter>
  );
};

export default withStyles(styles)(Footer);
