import React, { useState } from "react"

import { useMediaQuery } from "@material-ui/core";

import { Branding } from "@hyperobjekt/material-ui-website"

import DataHubLogo from '../../static/icons/dataHubLogo.svg'
import DataHubLogoMobile from '../../static/icons/dataHubLogoMobile.svg'

const Logo = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

  const title = 'DATAHUB'
  const logo = 
    isSmallScreen ? 
      <img src={DataHubLogoMobile} alt={title} /> :
      <img src={DataHubLogo} alt={title} />

  return (
    <Branding logo={logo}>
      {!logo && title}
    </Branding>
  )
}

export default Logo