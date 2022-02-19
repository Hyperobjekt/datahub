import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import { Block, Hero } from '@hyperobjekt/material-ui-website';
import { NewsPageStyles } from './styles/NewsStyles'
import NewsItem from './NewsItem'

import newsObj from '../../../content/data/news.json'

const NewsPage = () => {
  const classes = NewsPageStyles()

  return (
    <>
      <Hero
        ContainerProps={{
          justifyContent: "flex-start",
        }}
        alignItems="flex-end"
        bgcolor="#475865"
        color="grey.900"
        variant="overlay"
      >
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