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
            {isMediumScreen ? (
              <img
                className={classes.ourFriends}
                src={OurFriendsSmall}
                alt={'Organizations we work with'}
              />
            ) : (
              <img
                className={classes.ourFriends}
                src={OurFriends}
                alt={'Organizations we work with'}
              />
            )}
          </Box>
        </Box>
      </Block>
    </AboutUsWrapper>
  );
};

export default AboutUs;
