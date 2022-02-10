import React from "react";
import {
  Container,
  Footer as BaseFooter,
  Navigation,
} from "@hyperobjekt/material-ui-website";
import { Box, Grid, Typography, withStyles } from "@material-ui/core";
import GatsbyLink from "gatsby-link";

// add navigation styles to base navigation component
const FooterNavigation = withStyles((theme) => ({
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
    },
    HypContainer: {
      root: {
        textAlign: 'center',
        alignContent: 'center'
      }
    }
  },
  MuiList: {
    padding: {
      paddingTop: '0'
    }
  },
  HypContainer: {
    root: {
      textAlign: 'center',
      alignContent: 'center'
    }
  }
});

const Footer = ({ copyright, links, social, ...props }) => {
  return (
    <BaseFooter {...props}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <img src={require('../../../static/images/datahub_logo.png').default} alt='logo' />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box maxWidth="32em">
              <Typography variant="body2">
                <Box fontFamily='zeitung'>
                Data Hub is Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor.
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <FooterNavigation
              links={links}
              LinkComponent={GatsbyLink}
              isGatsbyLink={true}
            />
          </Grid>
        </Grid>
        <Box mt={6}>
          <Typography variant="body2">
            <Box fontFamily='zeitung'>
              {copyright}
            </Box>
          </Typography>
        </Box>
      </Container>
    </BaseFooter>
  );
};

export default withStyles(styles)(Footer);
