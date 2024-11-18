import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";


//export default function TodoTable(props) {
export default function TodoGrid({ todos, onRowSelected }) {

    // Default column definition
    const defaultColDefinition = {
        cellStyle: { textAlign: 'left' } // Left-align text for all columns
    };

    // columnsdef
    const columns = [
        {
            headerName: 'Description', field: 'description'

        },
        {
            headerName: 'Priority', field: 'priority',
            cellStyle: params => ({
                color: params.value == 'High' ? 'red' : 'black'
            })
        },
        {
            headerName: 'Date', field: 'date'
        }
    ];

    const gridRef = useRef();

    // Function to handle row selection
    const onSelectionChanged = () => {
        const selectedNode = gridRef.current.getSelectedNodes()[0];
        if (selectedNode) {
            onRowSelected(selectedNode.rowIndex);
        } else {
            onRowSelected(null);
        }
    };

    return (

        <div className="ag-theme-material"
            style={{ height: 700, width: 600, margin: 'auto' }}>
            <AgGridReact
                columnDefs={columns}
                defaultColDef={defaultColDefinition}
                rowData={todos}
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                //rowSelection={{ mode: "multiRow" }}
                rowSelection={{ mode: "singleRow" }}
                onSelectionChanged={onSelectionChanged} // Trigger callback on row selection change
            >
            </AgGridReact>
        </div>
    );
};
