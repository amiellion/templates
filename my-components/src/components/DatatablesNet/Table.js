import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TableDisplay from './TableDisplay';
import TableInitialize from './TableInitialize';
import TableListener from './TableListener';
import TableRspnsvCalc from './TableRspnsvCalc';
import './transition.css';

// export const TableContext = createContext(null);


const Table = ({
    id,
    displayColumns,
    dataColumns,
    endpoint,
    buttonAdd,
    buttonDelete,
    buttonUpdate,
    buttonView,
    viewPath,
    selectUpdate,
}) => {

    // const [state] = useState({
    //     id,
    //     displayColumns,
    //     dataColumns,
    //     endpoint,
    //     buttonAdd,
    //     buttonDelete,
    //     buttonUpdate,
    //     selectUpdate,
    // })

    return (
        // <TableContext.Provider
        //     value={state}
        // >
        <>
            <TableDisplay
                columns={displayColumns}
                id={id}
            />
            <TableInitialize
                id={id}
                buttonAdd={buttonAdd}
                buttonDelete={buttonAdd}
                buttonUpdate={buttonUpdate}
                buttonView={buttonView}
                viewPath={viewPath}
                dataColumns={dataColumns}
                endpoint={endpoint}
            />
            <TableListener />
            <TableRspnsvCalc />
        </>
        // </TableContext.Provider>
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