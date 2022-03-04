import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import { NewsPageStyles } from './styles/NewsStyles'
import NewsItem from './NewsItem'

import NewsHero from "../../../static/graphics/heroNewsStatic.png"

import newsObj from '../../../content/data/news.json'
import HeroText from '../general/HeroText';

const NewsPage = () => {
  const classes = NewsPageStyles()

  return (
    <>
      <Hero className="newsHero"
        ContainerProps={{
          justifyContent: "center",
          alignItems: "center"
        }}
        alignItems="center"
        image={NewsHero}
        bgcolor="rgb(65 83 97)"
        color="grey.900"
        variant="overlay"

      >
      <HeroText
        heading={"IN THE NEWS"}
        subheading={"Media coverage of our work, interviews, and more."}
        textBoxStyles={classes.textBoxStyles}
      />
      </Hero>
      <Block>
        <Box className={classes.newsPage}>
          <Typography variant="h5" className="bold">
              NEWS
          </Typography>
          {newsObj &&
            newsObj.news.map(item => <NewsItem item={item} />)
          }
        </Box>
      </Block>
    </>
  )
}

export default NewsPage