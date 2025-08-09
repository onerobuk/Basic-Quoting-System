import {type ReactNode, useEffect, useState} from "react";
import type { CustomCellRendererProps } from 'ag-grid-react';
import Popup from "../pages/resources/Popup.tsx";
import Spinner from "./Spinner.tsx";

interface fullProduct {
    id:number,
    name:string,
    price:number,
    sellerName:string,
    currencyCode:string
}

const PartnerPopupCellRenderer = (props:CustomCellRendererProps) =>{
    const [product,setProduct] = useState<fullProduct|undefined>(undefined);

    useEffect(() => {
        const id = props.data.id;
        getProductById(id);
    }, [props]);


    async function getProductById(id:number){

        try{
            const response = await fetch(`http://localhost:8080/products/${id}`,{
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
            const newPartner:fullProduct = {
                id:data.id,
                name:data.name,
                price:data.price,
                sellerName:data.sellerName,
                currencyCode:data.currencyCode
            }
            console.log("partner: ",newPartner);
            setProduct(newPartner);
        } catch (error){
            console.error('Partner Fetch error: ',error);
        }
    }

    if (!product){
        return (
            <Popup buttonName={`${props.value}`} modalTitle={''}
                   modalContent={<Spinner topMessage={""} bottomMessage={"Loading Content..."}/>}
            />
        )
    }

    const partnerDesc:ReactNode =(
        <span className='grid grid-cols-2'>
            <label>Id: </label><label>{product.id}</label>
            <label>Name: </label><label>{product.name}</label>
            <label>Price: </label><label>{product.price}</label>
            <label>Seller: </label><label>{product.sellerName}</label>
            <label>Currency Code: </label><label>{product.currencyCode}</label>
        </span>
    )

    return (
        <Popup
            buttonName={`${props.value}`}
            modalTitle={product.name}
            modalContent={partnerDesc}
        />
    )
}
export default PartnerPopupCellRenderer;