'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import {type Dispatch, type ReactNode, type SetStateAction, useEffect, useState} from "react";
import Popup from "./Popup.tsx";
import * as React from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface partner {
    id:number,
    name:string,
    seller:boolean
}

interface fullPartner {
    partnerId:number,
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    seller:boolean
}

interface partnerGridProps{
    setHeader:Dispatch<SetStateAction<string>>;
}

const PopupCellRenderer = (props) =>{
    const [isLoading,setIsLoading] = useState(true)
    const [partner,setPartner] = useState([]);

    useEffect(() => {
        getPartnerById(props.value)
    }, [props.value]);

    if (!props.context?.gridReady) {
        return null;
    }
    
    async function getPartnerById(id:number){
        
        try{
            const response = await fetch(`http://localhost:8080/partners/${id}`,{
                method:'GET',
                headers: {
                    'Frontend-Key':'tricephalos'
                }
            })
            if(!response.ok){
                throw new Error(`HTTP ERROR: ${response.status}`)
            }
            const data = await response.json();
            console.log(data);
            const newPartner:fullPartner = {
                partnerId:data.partnerId,
                partnerName:data.partnerName,
                partnerEmail:data.partnerEmail,
                shippingAddress:data.shippingAddress,
                billingAddress:data.billingAddress,
                seller:data.seller
            }
            setPartner(newPartner);
        } catch (error){
            console.error('Partner Fetch error: ',error);
        } finally {
            setIsLoading(false);
        }
    }

    console.log('fullPartner');
    console.log(partner.partnerEmail);

    const partnerDesc:ReactNode =(
        <span className='grid grid-cols-2'>
            <label>Id: </label><label>{partner.partnerId}</label>
            <label>Name: </label><label>{partner.partnerName}</label>
            <label>Email: </label><label>{partner.partnerEmail}</label>
            <label>Shipping Address: </label><label>{partner.shippingAddress}</label>
            <label>Billing Address: </label><label>{partner.billingAddress}</label>
            <label>Seller: </label><input className="justify-self-start mt-1.5 appearance-none w-4 h-4 border-2 rounded-md" checked={partner.seller} type='checkbox' disabled/>
        </span>
    )

    return (
        <Popup
            buttonName={props.value}
            modalTitle={isLoading?'':partner.partnerName}
            modalContent={isLoading?<label>Loading...</label>:partnerDesc}
        />
    )
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
                <p className=" text-white pt-64 font-bold">No Partners Found</p>
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
