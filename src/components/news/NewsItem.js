import React from 'react'

import {
  Link, 
  Typography,
  Box
} from "@material-ui/core"

import BlueBox from '../general/BlueBox.js'
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

  const title =
    <Link href={item.article[0].url}>
      <Typography className="dhNewsHeader">
        {item.article[0].title}
      </Typography>
    </Link>

  const lede = 
    <Typography variant="subtitle1">
        {editLede(item.lede)}
    </Typography>

  const source =
    <Typography variant="caption">
        {item.source[0].name} | {item.source[0].date}
    </Typography>


  return (
    <BlueBox
      itemStyles={classes.item}
      thumbnail={<img className={classes.thumbnail} src={item.thumbnail} />}
      title={title}
      copy1={lede}
      copy2={source}
    />
  )
}

export default NewsItem