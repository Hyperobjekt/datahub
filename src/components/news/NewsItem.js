import React from 'react'

import {
  Link, 
  Typography,
  Box
} from "@material-ui/core"

import { NewsItemStyles } from './styles/NewsStyles'

const NewsItem = (props) => {
  const { item } = props

  const classes = NewsItemStyles()

  const newsItem =
    <Box className={classes.item}>
      <img className={classes.thumbnail} src={item.thumbnail} />
      <Box className={classes.copy}>
        <Link href={item.article[0].url}>
          <Box component='span' className={classes.title}>
            {item.article[0].title}
          </Box>
        </Link>
        <Typography>
          <Box component='span' className={classes.lede}>
            {item.lede}
          </Box>
        </Typography>
        <Typography>
          <Box component='span' className={classes.source}>
            {item.source[0].name} | {item.source[0].date}
          </Box>
        </Typography>
      </Box>
    </Box>

  return newsItem
}

export default NewsItem