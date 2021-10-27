import React, { useState } from 'react'

import { 
  makeStyles,
  Box,
  Typography,
  TableRow,
  TableCell,
  Collapse,
  IconButton
} from '@material-ui/core'

import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@mui/icons-material'

const useStyles = makeStyles({
  evenAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& > *': {
      paddingRight: '40px'
    }
  }
})

const CollapsibleRow = (props) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow style={{ backgroundColor: props.index % 2 ? '#E8F5FF' : '#FFFFFF', borderBottom: 'unset' }}>
        <TableCell>
          <IconButton
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>Project Name</TableCell>
        <TableCell>
          <Box className={classes.evenAlign}>
            <a>9/2/21</a>
            <a>LINK</a>
            <a>PUBLISH</a>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ borderBottom: 'unset', background: props.index % 2 ? '#E8F5FF' : '#FFFFFF'}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ marginTop: '2px', marginBottom: '6px', marginLeft: 'calc(10.5%)', background: '#FFFFFF' }}>
              <Typography variant='body2' gutterBottom component='div'>
                info
              </Typography>
            </Box>
            <Box sx={{ marginTop: '2px', marginBottom: '6px', marginLeft: 'calc(10.5%)', background: '#FFF8ED' }}>
              <Typography variant='body2' gutterBottom component='div'>
                Project Name
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default CollapsibleRow