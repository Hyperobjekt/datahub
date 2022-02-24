import React, { useEffect } from 'react';

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import RoundedButton from '../general/RoundedButton';

import HomeHero from "../../../static/graphics/heroHeaderStatic.png"

const handleScrollClick = () => {
  const scrollTo = document.getElementById('scrollTo')

  scrollTo.scrollIntoView()
}

const HomePage = () => {

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
        height="600px"
        alignItems="flex-end"
        bgcolor="#475865"
        image={HomeHero}
        variant="overlay"
      >
        <RoundedButton
          handleClick={handleScrollClick}
          text={'View Resources'}
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
