import {type ReactNode, useEffect, useState} from "react";
import Popup from "../resources/Popup.tsx";

interface fullPartner {
    partnerId:number,
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    seller:boolean
}

const PopupCellRenderer = (props) =>{
    const [isLoading,setIsLoading] = useState(true)
    const [partner,setPartner] = useState<fullPartner>([]);

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
                seller:data.isSeller
            }
            console.log("partner: ",newPartner);
            setPartner(newPartner);
        } catch (error){
            console.error('Partner Fetch error: ',error);
        } finally {
            setIsLoading(false);
        }
    }
    const partnerDesc:ReactNode =(
        <span className='grid grid-cols-2'>
            <label>Id: </label><label>{partner.partnerId}</label>
            <label>Name: </label><label>{partner.partnerName}</label>
            <label>Email: </label><label>{partner.partnerEmail}</label>
            <label>Shipping Address: </label><label>{partner.shippingAddress}</label>
            <label>Billing Address: </label><label>{partner.billingAddress}</label>
            <label>Seller: </label><input className="justify-self-start mt-1.5 w-4 h-4 border-2 rounded-md text-black" checked={partner.seller} type='checkbox' disabled/>
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
export default PopupCellRenderer;