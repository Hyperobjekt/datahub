import React from 'react'

import {
  makeStyles,
  Box
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  item: {
    backgroundColor: '#E8F5FF',

    maxWidth: theme.spacing(70),
    padding: theme.spacing(3),
    margin: '0 0 40px 0'
  },
  copy: {
    fontSize: '1em',
    width: '380px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    display: 'inline-block',

    verticalAlign: 'top'
  }
}))

const BlueBox = (props) => {
  const {
    itemStyles,
    copyStyles,
    thumbnail,
    title,
    copy1,
    copy2,
  } = props

  const classes = useStyles()

  return (
    <Box className={itemStyles ? itemStyles : classes.item}>
      {thumbnail ? thumbnail : null}
      <Box className={copyStyles ? copyStyles : classes.copy}>
        {title}
        {copy1}
        {copy2 ? copy2 : null}
      </Box>
    </Box>
  ) 
}

export default BlueBox