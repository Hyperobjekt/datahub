import React from 'react'

import CollapsibleRow from './CollapsibleRow'

import { 
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer
} from '@material-ui/core'

const useStyles = makeStyles({

})

const ResourcesTable = (props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project Name</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CollapsibleRow />
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ResourcesTable
