import React from 'react';
import BaseDesktopNavigation from 'gatsby-theme-hypersite/src/header/desktop-navigation';

/**
 * Duplicate of base component desktop nav, but do not forward the partially active LinkProps
 */
const DesktopNavigation = ({ LinkProps, ...rest }) => {
  const newLinkProps = {
    ...LinkProps,
    partiallyActive: false,
  };
  return <BaseDesktopNavigation LinkProps={newLinkProps} {...rest} />;
};

export default DesktopNavigation;
