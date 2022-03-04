import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import DataHubLogo from '../../static/icons/dataHubLogo.svg';
import DataHubLogoMobile from '../../static/icons/dataHubLogoMobile.svg';
import { Link } from 'gatsby';

const Logo = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const title = 'DATAHUB';
  const logo = isSmallScreen ? (
    <img src={DataHubLogoMobile} width="150" alt={title} />
  ) : (
    <img src={DataHubLogo} width="160" alt={title} />
  );
  return <Link to="/">{logo}</Link>;
};

export default Logo;
