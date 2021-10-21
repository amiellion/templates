import $ from 'jquery';
import { useEffect, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import TableFetchData from './TableFetch';


window.jQuery = $;
window.$ = $;
global.jQuery = $;
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require('datatables.net-autofill');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder');
require('datatables.net-keytable');
require('datatables.net-responsive-bs');
require('datatables.net-rowgroup');
require('datatables.net-rowreorder');
require('datatables.net-scroller');
require('datatables.net-select');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedheader');
require('jszip');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
$.DataTable = require('datatables.net-bs');

`
<button class='m-0 p-2 px-2 btn btn-success btn-rounded btn-review'>REVIEW</button>
<button class='m-0 p-2 px-2 btn btn-outline-primary btn-rounded btn-print'>PRINT</button>
<button class='m-0 p-2 px-2 btn btn-outline-info btn-rounded btn-uploadID feather icon-credit-card'></button>

`

const buttons = {
    add: `<button class='m-0 p-2 px-2 btn btn-rounded btn-success feather icon-plus btn-add'>ADD</button>`,
    delete: `<button class='m-0 p-2 px-2 btn btn-rounded btn-outline-danger btn-delete'><span className="feather icon-trash"/></button>`,
    update: `<button class='m-0 p-2 px-2 btn btn-rounded btn-success btn-edit'><span className="feather icon-edit"/></button>`,
    view: ``,
}

const TableInitialize = ({
    id,
    columns,
    endpoint,
    buttonAdd,
    buttonUpdate,
    buttonDelete,
    buttonView,
    viewPath,

}) => {
    const [rnuOnce, setRunOnce] = useState(false);

    let tableData = TableFetchData(endpoint);

    useEffect(() => {
        let domInit = "<lf<t>ip>"
        let tableColumns = [];
        let externalButtons = [];
        let defaultContent = `
            ${buttonUpdate && buttons.update}
            ${buttonDelete && buttons.delete}
        `;

        tableColumns = columns.map(columnName => {
            if (columnName === 'name') {
                return {
                    data: columnName, render: function (data, type, row) {
                        let fullname = ``;

                        if (data) {
                            fullname = `${data.fname} ${data.mname} ${data.lname}`
                        }
                        return fullname;
                    }
                }
            }
            else {
                return {
                    data: columnName, render: function (data, type, row) {
                        if (data) {
                            return data
                        } else {
                            return "No Data/Deleted"
                        };
                    }
                }
            }
        });

        


        //datatable moment 
        $.fn.dataTable.ext.errMode = "throw";
        $.fn.dataTable.moment('MMMM DD YYYY - dddd');
        $.fn.dataTable.moment('MMMM DD, YYYY - dddd');
        $.fn.dataTable.moment('hh:mm A to hh:mm A');
        $.fn.dataTable.moment('MMMM DD, YYYY - dddd - hh:mm:ss A');


        //displayTabledata
        if (tableData.data) {
            $.fn.dataTable.ext.errMode = "throw";

            $(`#${id}`).DataTable({
                data: tableData.data,
                dom: domInit,
                responsive: true,
                order: [[0, "asc"]],
                columns: tableColumns,
                pageLength: 5,
                lengthMenu: [
                    [5, 10, 25, 50, 100, -1],
                    [5, 10, 25, 50, 100, "Show All"],
                ],
                language: {
                    "emptyTable": "No data to display."
                },
                defaultContent: defaultContent,
                buttons: externalButtons
            });
        }
    }, [tableData])

    return null;
}


export default TableInitialize;