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
  const rows = [0, 1, 2, 3, 4]

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#FFF8ED' }} >
            <TableCell style={{ width: '10%' }} />
            <TableCell style={{ width: '45%' }}>Project Name</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(i =>
            <CollapsibleRow index={i} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ResourcesTable
