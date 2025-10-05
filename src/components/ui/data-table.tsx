import { AgGridReact } from 'ag-grid-react'
import type { ColDef, RowClickedEvent, CellValueChangedEvent } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { useMemo } from 'react'

interface DataTableProps<T> {
    rowData: T[]
    columnDefs: ColDef<T>[]
    className?: string
    onRowClicked?: (data: T) => void
    onCellValueChanged?: (data: T) => void
}

export function DataTable<T>({
    rowData,
    columnDefs,
    className = '',
    onRowClicked,
    onCellValueChanged,
}: DataTableProps<T>) {
    const defaultColDef = useMemo<ColDef<T>>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
    }), [])

    const handleRowClicked = (event: RowClickedEvent<T>) => {
        if (onRowClicked && event.data) {
            onRowClicked(event.data)
        }
    }

    const handleCellValueChanged = (event: CellValueChangedEvent<T>) => {
        if (onCellValueChanged && event.data) {
            onCellValueChanged(event.data)
        }
    }

    return (
        <div className={`ag-theme-quartz-dark w-full h-full ${className}`}>
            <AgGridReact<T>
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={20}
                animateRows={true}
                onRowClicked={handleRowClicked}
                onCellValueChanged={handleCellValueChanged}
            />
        </div>
    )
}

