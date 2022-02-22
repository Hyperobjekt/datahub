import React from 'react';

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

  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: 'flex-start',
        }}
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
    </>
  );
};

export default HomePage;
