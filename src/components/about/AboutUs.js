import React from 'react';
import { Typography, Box, Link, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { Block, Hero } from '@hyperobjekt/material-ui-website';
import { AboutUsPage } from './styles/AboutStyles';
import BlueBox from '../general/BlueBox';
import OurTeam from './OurTeam';
import HereLabLogo from '../../../static/images/hereLabLogo.svg';
import AboutHero from '../../../static/graphics/heroAboutStatic.png';
import OurFriends from '../../../static/graphics/ourFriends.png';
import OurFriendsSmall from '../../../static/graphics/ourFriendsSmall.png';
import aboutUsObj from '../../../content/data/about.json';
import HeroText from '../general/HeroText';
import BlueBoxCopy from '../general/BlueBoxCopy';
import AboutUsWrapper from './AboutUsWrapper';
import DD from '../../../static/graphics/friends-logos/header-logo.svg';
import Fisk from '../../../static/graphics/friends-logos/FISK COLLEGIATE SPIRE V1 COLOR.png';
import SDCC from '../../../static/graphics/friends-logos/SDCC-Icon.png';
import SHE from '../../../static/graphics/friends-logos/SHE-Lab-Logo-2-2048x2048.jpeg';
import UCI from '../../../static/graphics/friends-logos/UCi19_LAW_StudentLoanLaw_Int_LF_blue.png';
import Merced from '../../../static/graphics/friends-logos/LRrvuTz9_400x400.jpeg';
import TICAS from '../../../static/graphics/friends-logos/ticas.png';
import Roosevelt from '../../../static/graphics/friends-logos/Roosevelt.png';
import SBPC from '../../../static/graphics/friends-logos/sbpc-logo.png';


const AboutUs = () => {
  const classes = AboutUsPage();
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const firstBlock = aboutUsObj.firstBlock[0];
  const secondBlock = aboutUsObj.secondBlock[0];
  const thirdBlock = aboutUsObj.thirdBlock[0];

  return (
    <AboutUsWrapper>
      <Hero
        ContainerProps={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        alignItems="flex-end"
        image={AboutHero}
        bgcolor="rgb(65 83 97)"
        color="grey.900"
        variant="overlay"
      >
        <HeroText
          heading={"THE HIGHER EDUCATION RACE & THE ECONOMY (HERE) LAB"}
          subheading={"The Lab seeks to explain uneven racial and class distributions of resources and risk in higher education systems and economies—and to help reverse those inequalities."}
          textBoxStyles={classes.textBoxStyles}
        />
      </Hero>
      <Block>
        <Box className={classes.centerAlign}>
          <Box>
            <Typography variant="h5" className="bold">
              ABOUT US
            </Typography>
            <Box className={classes.hlText}>
              <Box className={classes.hlBox}>
                <Typography className="dhHlText">
                  {firstBlock.motive}
                </Typography>
              </Box>
              <Typography className="dhHlBody">
                {firstBlock.location}
              </Typography>
            </Box>
          </Box>
          <Box className="what-drives-us">
            <Typography className="dhAboutDrive" align="center">
              WHAT DRIVES US TO DO THIS WORK?
            </Typography>
            <Typography variant="body2" className="bold">
              {secondBlock.drive}
            </Typography>
            <Typography variant="body2">{secondBlock.approach}</Typography>
          </Box>
          <Box className={classes.hlText}>
            <Box className={classes.hlBox}>
              <Typography className="dhHlText">{thirdBlock.motive}</Typography>
            </Box>
            <Typography className="dhHlBody">{thirdBlock.approach}</Typography>
          </Box>
          <Box className={classes.logo}>
            <img
              className={classes.logoWidth}
              src={HereLabLogo}
              alt={'Here Lab logo'}
            />
            <Typography className="dhHlBody">
              {aboutUsObj.fourthBlock[0].positionOne}
            </Typography>
            <Typography className="dhHlBody">
              {aboutUsObj.fourthBlock[0].positionTwo}
            </Typography>
           {/* } <Typography className="dhHlBody">
              <Typography display="inline" className={clsx('dhHlBody', 'bold')}>
                Building on DuBois:{' '}
              </Typography>
              Our website and logos incorporate elements of the data
              visualization style developed by sociologist W. E. B. Du Bois and
              his collaborators at the beginning of the 20th century. The
              <Link
                href={
                  'https://www.dignityanddebt.org/projects/du-boisian-resources'
                }
              >
                <Typography display="inline" className="dhHlBody">
                  &nbsp;
                </Typography>
                <Typography
                  display="inline"
                  className={clsx('dhHlBody', 'bold')}
                >
                  Du Boisian Visualization Tool Kit
                </Typography>
              </Link>{' '}
              from
              <Link href={'https://www.dignityanddebt.org/'}>
                <Typography display="inline" className="dhHlBody">
                  &nbsp;
                </Typography>
                <Typography
                  display="inline"
                  className={clsx('dhHlBody', 'bold')}
                >
                  Dignity + Debt
                </Typography>
                <Typography display="inline" className="dhHlBody">
                  &nbsp;
                </Typography>
              </Link>
              provides a clearinghouse of information on Du Bois's work and
              coding tools for data visualization in the Du Boisian style.
              </Typography> */}
          </Box>
          <OurTeam team={aboutUsObj.team} />
          <Box className={classes.centerAlign}>
            <Typography variant="overline">Our Friends</Typography>
            {
              <div className="ourFriendsLogos">
              <a href="https://www.dignityanddebt.org/">
                <img
                  className={classes.ourFriends}
                  src={DD}
                  alt={'Organizations we work with'}
                />
              </a>
              <a href="https://herutech.com/whitneylpirtle/?page_id=391#:~:text=Mission,root%20causes%20to%20health%20disparities">
              <img
                className="img__smaller"
                src={SHE}
                alt={'Organizations we work with'}
              />
             </a>
              <a href="https://www.law.uci.edu/centers/slli/">
              <img
                className={classes.ourFriends}
                src={UCI}
                alt={'Organizations we work with'}
              />
              </a>
             <a href="https://www.fisk.edu/">
              <img
                className="img__smaller"
                src={Fisk}
                alt={'Organizations we work with'}
              />
             </a>
             <a href="https://studentdebtcrisis.org/">
              <img
                className="img__smaller"
                src={SDCC}
                alt={'Organizations we work with'}
              />
             </a>
             <a href="https://protectborrowers.org/">
              <img
                className={classes.ourFriends}
                src={SBPC}
                alt={'Organizations we work with'}
              />
             </a>
             <a href="https://ticas.org/">
              <img
                className={classes.ourFriends}
                src={TICAS}
                alt={'Organizations we work with'}
              />
             </a>
             <a href="https://clc.ucmerced.edu/">
              <img
                className="img__smaller"
                src={Merced}
                alt={'Organizations we work with'}
              />
             </a>
             <a href="https://rooseveltinstitute.org/">
              <img
                className={classes.ourFriends}
                src={Roosevelt}
                alt={'Organizations we work with'}
              />
             </a>
            </div>
            }
          </Box>
        </Box>
      </Block>
    </AboutUsWrapper>
  );
};

export default AboutUs;
