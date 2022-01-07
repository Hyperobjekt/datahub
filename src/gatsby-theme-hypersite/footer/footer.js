import React from 'react'

import { Footer as BaseFooter} from '@hyperobjekt/material-ui-website'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

})

const TextFooter = () => { return (<div>vibu</div>) }

export default function Footer(props) {
  const classes = useStyles()

  return (
    <BaseFooter style={{ height: '700px', background: "green", padding: `24px 0` }} {...props}>
    </BaseFooter>
  )
}