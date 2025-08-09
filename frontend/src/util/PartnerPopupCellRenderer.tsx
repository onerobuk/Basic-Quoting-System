import {type ReactNode, useEffect, useState} from "react";
import type { CustomCellRendererProps } from 'ag-grid-react';
import Popup from "../pages/resources/Popup.tsx";
import Spinner from "./Spinner.tsx";

interface fullPartner {
    partnerId:number,
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    seller:boolean
}

type PopupProps = CustomCellRendererProps &{
    nameColumn:boolean
}


const PartnerPopupCellRenderer = (props:PopupProps ) =>{
    const [partner,setPartner] = useState<fullPartner|undefined>(undefined);

    useEffect(() => {
        const idValue = (props.nameColumn) ? props.data.id : props.value
        getPartnerById(idValue)
    }, [props]);

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
                seller:data.isSeller
            }
            console.log("partner: ",newPartner);
            setPartner(newPartner);
        } catch (error){
            console.error('Partner Fetch error: ',error);
        }
    }

    if (!partner){
        return (
            <Popup buttonName={'undefined'} modalTitle={''}
                   modalContent={<Spinner topMessage={""} bottomMessage={"Loading Content..."}/>}
            />
        )
    }

    const partnerDesc:ReactNode =(
        <span className='grid grid-cols-2'>
            <label>Id: </label><label>{partner.partnerId}</label>
            <label>Name: </label><label>{partner.partnerName}</label>
            {partner.seller &&
                <>
                    <label>Email: </label><label>{partner.partnerEmail}</label>
                    <label>Shipping Address: </label><label>{partner.shippingAddress}</label>
                    <label>Billing Address: </label><label>{partner.billingAddress}</label>
                </>
            }
            <label>Seller: </label><input className="justify-self-start mt-1.5 w-4 h-4 border-2 rounded-md text-black" checked={partner.seller} type='checkbox' disabled/>
        </span>
    )

    return (
        <Popup
            buttonName={`${partner.partnerName}`}
            modalTitle={partner.partnerName}
            modalContent={partnerDesc}
        />
    )
}
export default PartnerPopupCellRenderer;