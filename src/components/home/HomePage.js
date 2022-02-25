import React, { useEffect } from 'react';

import { 
  Box
} from '@material-ui/core';

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import RoundedButton from '../general/RoundedButton';
import { HomePageStyles } from './styles/HomeStyles';

import HomeHero from "../../../static/graphics/heroHeaderStatic.png"

const handleScrollClick = () => {
  const scrollTo = document.getElementById('scrollTo')

  scrollTo.scrollIntoView()
}

const HomePage = () => {
  const classes = HomePageStyles()

  useEffect(() => {
    const homePage = document.getElementById('heroScrollTo')

    homePage.scrollIntoView()
  }, [])

  return (
    <div id="heroScrollTo">
      <Hero
        id="heroScrollTo"
        ContainerProps={{
          justifyContent: 'flex-start',
        }}
        className={classes.hero}
      >
        <RoundedButton
          handleClick={handleScrollClick}
          text={'BROWSE OUR DATA AND CODE'}
        />
      </Hero>

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
