import { Table } from 'react-bootstrap';
import React from 'react-bootstrap';

import TableLoader from './loader/TableLoader';
import PropTypes from 'prop-types';


const TableDisplay = ({
    columns,
    id
}) => {

    let finalColumns = columns?.map((columns, index) => {
        columns.push(<th key={`${columns}-${index}`}>{columns}</th>)
    })

    return (
        <Table hover striped responsive className="table table-condensed " id={id}>
            <thead>
                <tr>
                    {finalColumns}
                </tr>
                <TableLoader area="initial" colSpan={columns?.length} />
                <TableLoader area={id} colSpan={columns?.length} />
            </thead>
        </Table>
    )
}

export default TableDisplay;

TableDisplay.propTypes={
    columns: PropTypes.array,
    id: PropTypes.string,
}