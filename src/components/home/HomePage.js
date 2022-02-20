import React from 'react';

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import ResourcesTable from './ResourcesTable';
import SplitHeader from './SplitHeader';
import ScrollButton from './ScrollButton';
import HomeHero from "../../../static/icons/homeHero.png";

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
