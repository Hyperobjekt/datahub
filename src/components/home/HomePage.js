import React from 'react';

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import { HomePageStyles } from './styles/HomeStyles';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import RoundedButton from '../general/RoundedButton';

const handleScrollClick = () => {
  const scrollTo = document.getElementById('scrollTo')

  scrollTo.scrollIntoView()
}

const HomePage = () => {
  const classes = HomePageStyles()

  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: 'flex-start',
        }}
        height="500px"
        alignItems="flex-end"
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
