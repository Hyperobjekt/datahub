import React from "react";
import {
  Container,
  Footer as BaseFooter,
} from "@hyperobjekt/material-ui-website";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
});

const Footer = ({ copyright, links, social, ...props }) => {
  return (
    <BaseFooter {...props}>
      <Container></Container>
    </BaseFooter>
  );
};

export default withStyles(styles)(Footer);
