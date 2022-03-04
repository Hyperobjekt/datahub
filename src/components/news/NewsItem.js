import React from 'react';

import { 
  Link, 
  Typography, 
  Box,
  withStyles
} from '@material-ui/core';

const editLede = (lede) => {
  const maxLen = 198;
  let editedLede;

  lede.length > maxLen
    ? (editedLede = lede.slice(0, 197).concat('...'))
    : (editedLede = lede);

  return editedLede;
};

const NewsItemWrapper = withStyles(theme => ({
  root: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(90),
    padding: theme.spacing(3),
    margin: '0 0 40px 0',

    display: 'flex',
    //thumbnail styles
    '& .news_thumbnail': {
      width: '248px',
      height: '248px',
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
      },
      objectFit: 'cover',
  
      margin: '0 20px 0 0'
    }
  }
}))(Box)

const NewsItem = (props) => {
  const { item } = props;
  return (
    <NewsItemWrapper>
      <img className="news_thumbnail" src={item.thumbnail} />
      <Box>
        <Link href={item.article[0].url}>
          <Typography className="dhNewsHeader">
            {item.article[0].title}
          </Typography>
        </Link>
        <Typography variant="subtitle1">{editLede(item.lede)}</Typography>
        <Typography variant="caption">
          {item.source[0].name} | {item.source[0].date}
        </Typography>
      </Box>
    </NewsItemWrapper>
  );
};

export default NewsItem;
 