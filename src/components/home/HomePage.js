import React from 'react';

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import RoundedButton from '../general/RoundedButton';
import HomeHero from "../../../static/icons/homeHero.png";

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
        height="600px"
        alignItems="flex-end"
        image={HomeHero}
        color="grey.900"
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
