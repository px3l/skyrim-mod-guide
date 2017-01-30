import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const MUItable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Unbound</TableRowColumn>
        <TableRowColumn>Escape Imperial custody and a dragon raid.</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Before the Storm</TableRowColumn>
        <TableRowColumn>Inform the Jarl of Whiterun about the dragon attack on Helgen.</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default MUItable;