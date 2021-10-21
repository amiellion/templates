import React from 'react';
import PropTypes from 'prop-types';
import TableDisplay from './TableDisplay';
import TableInitialize from './TableInitialize';
import TableListener from './TableListener';
import TableRspnsvCalc from './TableRspnsvCalc';


const Table = ({
    id,
    displayColumns,
    dataColumns,
    endpoint,
    buttonAdd,
    buttonDelete,
    buttonUpdate,
    selectUpdate,
}) => {
    return (
        <>
            <TableDisplay />
            <TableInitialize />
            <TableListener />
            <TableRspnsvCalc />
        </>
    )
}

export default Table;

Table.propTypes = {
    id: PropTypes.string,
    dataColumns: PropTypes.array,
    displayColumns: PropTypes.array,
    endpoint: PropTypes.string,
    buttonAdd: PropTypes.bool,
    buttonDelete: PropTypes.bool,
    buttonUpdate: PropTypes.bool,
    selectUpdate: PropTypes.bool,
};