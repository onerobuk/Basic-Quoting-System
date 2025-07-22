'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import {type Dispatch, type SetStateAction, useEffect, useState} from "react";
import PopupCellRenderer from "./partnerPopupCellRenderer.tsx";
import * as React from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface partner {
    id:number,
    name:string,
    seller:boolean
}

interface partnerGridProps{
    setHeader:Dispatch<SetStateAction<string>>;
}


const PartnerGrid= ({setHeader}:partnerGridProps) => {
    const [partners,setPartners] = useState<partner[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const [gridReady,setGridReady] = useState(false);

    async function getPartners(){
        try{
            const response = await fetch('http://localhost:8080/partners',{
                method:'GET',
                headers: {
                    'Frontend-Key':'tricephalos'
                }
            })
            if(!response.ok){
                throw new Error(`HTTP ERROR: ${response.status}`)
            }
            console.log("Partner GET request success");
            const data = await response.json();
            const newPartners:partner[] = data.map((item)=>{
                console.log(item);
                return {
                id: item.id,
                name: item.name,
                seller: item.seller
                };
        });
            console.log(newPartners);
            setPartners(newPartners)
        } catch (error){
            console.error('Partner Fetch error: ',error);
        } finally {
            setIsLoading(false);
        }
    }

    const colDefs: ColDef<partner>[] = [
        {
            field: "id",
            cellRenderer:PopupCellRenderer,
        },
        {field: "name"},
        {field: "seller"}
    ]

    const defaultColDef: ColDef = {
        flex: 1,
        sortable:true,
        filter:true
    }

    useEffect(() => {
        setHeader("All Partners");
        document.title = "Partners";
        getPartners();
    }, [setHeader])

    if(isLoading) {
        return(
        <div className="flex h-dvh w-full bg-neutral-600 justify-center">
            <p className=" text-white pt-64 font-bold">Loading...</p>
        </div>)
    }
    else if (partners.length==0){
        return(
            <div className="flex h-dvh w-full bg-neutral-600 justify-center">
                <p className=" text-white pt-58 font-bold text-xl">No Partners Found</p>
            </div>
        )

    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-neutral-600">
            <div style={{width: "50%", height: "80%"}}>
                <AgGridReact
                    onGridReady={()=>setGridReady(true)}
                    context={{gridReady}}
                    theme={themeQuartz}
                    rowData={partners}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    )
}

export default PartnerGrid
