'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import PopupCellRenderer from "../../util/ProductPopupCellRenderer.tsx";

ModuleRegistry.registerModules([AllCommunityModule]);

interface quoteline{
    productName:string,
    productId:number,
    quantity:number,
    price:number,
    currencyCode:string
}

const QuotelineGrid = () =>{

    const defaultColDef: ColDef = {
        flex: 1,
        sortable:true,
        filter:true
    }

    const colDefs: ColDef<quoteline>[] = [
        {
            field: "productId",
            headerName: "Id"
        },
        {
            field: "productName",
            headerName:"Name",
            cellRenderer:PopupCellRenderer
        },
        {field:"quantity"},
        {field: "price"},
    ]

    return (
        <div className="flex h-screen w-full items-center justify-center bg-neutral-600">
            <div style={{width: "50%", height: "80%"}}>
                <AgGridReact
                    theme={themeQuartz}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    )
}
export default QuotelineGrid;