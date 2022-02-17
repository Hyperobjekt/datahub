import { Block, Hero } from '@hyperobjekt/material-ui-website';
import React from 'react';

import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import ScrollButton from './ScrollButton';
const HomePage = () => {
  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: 'flex-start',
        }}
        alignItems="flex-end"
        bgcolor="#475865"
        color="grey.900"
        variant="overlay"
      >
        <ScrollButton />
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
