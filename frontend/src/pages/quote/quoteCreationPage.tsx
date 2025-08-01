'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import PopupCellRenderer from "../../util/partnerPopupCellRenderer.tsx";

ModuleRegistry.registerModules([AllCommunityModule]);

interface quoteline{
    productId:number,

}

const quoteCreationPage = () =>{

    const defaultColDef: ColDef = {
        flex: 1,
        sortable:true,
        filter:true
    }

    const colDefs: ColDef<quoteline>[] = [
        {
            field: "productId",
            cellRenderer:PopupCellRenderer,
        },
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
export default quoteCreationPage;