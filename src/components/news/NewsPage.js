import React from 'react'

import {
  Typography
} from "@material-ui/core";

import { NewsPageStyles } from './styles/NewsStyles'
import NewsItem from './NewsItem'
import news from '../../../content/data/news.json'

export default function NewsPage() {
  const classes = NewsPageStyles()

  return (
    <>
      <Typography>NEWS</Typography>
      {news &&
        news.map(item => <NewsItem item={item} />)
      }
    </>
  )
}