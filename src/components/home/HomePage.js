import React from 'react';
import { Block, Hero } from '@hyperobjekt/material-ui-website';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import RoundedButton from '../general/RoundedButton';
import { HomePageStyles } from './styles/HomeStyles';
import HeroText from '../general/HeroText';

const handleScrollClick = () => {
  const scrollTo = document.getElementById('scrollTo');
  scrollTo.scrollIntoView();
};

const HomePage = () => {
  const classes = HomePageStyles();

  return (
    <div id="heroScrollTo" className={classes.backgroundDiv}>
      <div id="homeHero">
        <Hero
          ContainerProps={{
            justifyContent: 'flex-start',
          }}
          className={classes.hero}
        >
          <HeroText
            heading={"The DataHub At UC Merced"}
            subheading={"We publish code for linking organizational and socio-economic data for thousands of US colleges."}
          />
          <RoundedButton
            handleClick={handleScrollClick}
            text={'BROWSE OUR DATA AND CODE'}
          />
        </Hero>
      </div>
      <SplitHeader />

      <Block>
        <div id="scrollTo">
          <ResourcesTable />
        </div>
      </Block>
    </div>
  );
};

export default HomePage;
