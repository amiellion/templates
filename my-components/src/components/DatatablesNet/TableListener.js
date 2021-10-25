import $ from "jquery";
// import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from "react";

function TableListener({
    tableID,
    reloadAPI,
    mode,
    ...props
}) {
    // const dispatch = useDispatch();
    const [currID, setID] = useState(0)
    const TABLE_ID = `#${tableID}`;
    useEffect(() => {
        $(document).ready(function () {

            $(TABLE_ID).on('click', `.btn-${mode}`, function () {
                //initialize table reference
                let table = $(TABLE_ID).DataTable();
                let data = table.row($(this).parents('tr')).data();      //table data fetching
                if (data === undefined) {                                   //if table is in responsive layout/mobile layout
                    let selected_row = $(this).parents('tr');
                    if (selected_row.hasClass('child')) {
                        selected_row = selected_row.prev();
                    }
                    data = table.row(selected_row).data();
                }
                // setID(data);
                // dispatch(props.props.dispatchAction())                   //execute redux action
            });

        });
        return () => {
            $(TABLE_ID).off('click');
        }
    }, [])

    return (
        props.children ? (
            < span >
                {/* {React.cloneElement(props.children, { apis: apiss, data: currID, form: props.props.form })} */}
            </span >
        ) : null

    )

}

export default TableListener;
TableListener.propTypes={
    tableID: PropTypes.string,
    reloadAPI: PropTypes.string,
    mode: PropTypes.string,
}