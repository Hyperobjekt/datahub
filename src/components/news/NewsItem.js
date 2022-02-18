import React from 'react'

import {
  Link, 
  Typography,
  Box
} from "@material-ui/core"

import { NewsItemStyles } from './styles/NewsStyles'

const editLede = (lede) => {
  const maxLen = 198
  let editedLede

  lede.length > maxLen ?
    editedLede = lede.slice(0, 197).concat('...') :
    editedLede = lede

  return editedLede
}

const NewsItem = (props) => {
  const { item } = props

  const classes = NewsItemStyles()

  const newsItem =
    <Box className={classes.item}>
      <img className={classes.thumbnail} src={item.thumbnail} />
      <Box className={classes.copy}>
        <Link href={item.article[0].url}>
          <Typography className="dhNewsHeader">
            {item.article[0].title}
          </Typography>
        </Link>
        <Typography variant="subtitle1">
            {editLede(item.lede)}
        </Typography>
        <Typography variant="caption">
            {item.source[0].name} | {item.source[0].date}
        </Typography>
      </Box>
    </Box>

  return newsItem
}

export default NewsItem