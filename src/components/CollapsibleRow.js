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
  
})

const CollapsibleRow = (props) => {
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
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow style={{ borderBottom: 'unset', background: props.index % 2 ? '#E8F5FF' : '#FFFFFF'}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1, paddingLeft: 'calc(10.5%)' }}>
              <Typography variant='h6' gutterBottom component='div'>
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