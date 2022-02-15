import React from 'react'

import {
  Typography,
  Box
} from "@material-ui/core";

import { NewsPageStyles } from './styles/NewsStyles'
import NewsItem from './NewsItem'

import newsObj from '../../../content/data/news.json'

const NewsPage = () => {
  const classes = NewsPageStyles()

  return (
    <Box className={classes.newsPage}>
      <Typography>
        <Box component='span' className={classes.pageTitle}>
          NEWS
        </Box>
      </Typography>
      {newsObj &&
        newsObj.news.map(item => <NewsItem item={item} />)
      }
    </Box>
  )
}

export default NewsPage