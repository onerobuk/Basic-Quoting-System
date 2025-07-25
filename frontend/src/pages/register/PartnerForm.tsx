import {useEffect, useState,useContext} from "react";
import {PageContext} from "../../context/PageContext.tsx";
import type {SubmitHandler} from "react-hook-form";
import {useForm} from "react-hook-form";
import SuccessPage from "./SuccessPage.tsx";


interface partnerFormI {
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    isSeller:boolean
}

interface partnerDTO{
    partnerId:number,
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    isSeller:boolean
}

interface partnerReq{
    entity:partnerDTO,
    username:string
}

const PartnerForm = () =>{
    const [submitted,setSubmitted] = useState<boolean>(false);
    const {setPage} = useContext(PageContext);

    useEffect(()=>{
        setPage({pageName:'Register New Partner',header:'Register'});
    },[setPage])

    const inputClasses:string = 'border-black border-2 rounded-md p-1 bg-neutral-600 mt-4'
    const errorClasses:string = ' bg-red-200 text-black';

    const {register,handleSubmit,formState:{errors}} = useForm<partnerFormI>();
    const onSubmit: SubmitHandler<partnerFormI> = async (data:partnerFormI)=> {
        const dto:partnerDTO = {
            partnerId:0,
            ...data,
        }
        const request:partnerReq = {
            entity:dto,
            username:'test'
        }
        console.log("Outgoing request: ",request);
        try{
            const response = await fetch('http://localhost:8080/partners',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Frontend-Key':'tricephalos'
                },
                body:JSON.stringify(request)
            })
            if(!response.ok){
                throw new Error(`HTTP ERROR: ${response.status}`)
            }
            console.log('POST successful: ',response);
        } catch (error){
            console.error('Partner POST error: ',error);
        } finally {
            setSubmitted(true);
        }
    };

    if(submitted){
        return <SuccessPage redirectDelay={3000} redirectTarget={'/resources/partners'} topMessage={'New Partner Successfully Added'} bottomMessage={'Redirecting...'}/>
    }

    return(
        <div className='bg-neutral-600 text-white justify-items-center w-full h-screen pt-1'>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-center p-3">
                <input placeholder='Name' className={inputClasses+(errors.partnerName?errorClasses:' text-white')} {...register("partnerName", {required: true, maxLength: 50})}/>
                <input placeholder='Email' className={inputClasses+(errors.partnerEmail?errorClasses:' text-white')}{...register("partnerEmail", {required: true, maxLength: 50})}/>
                <input placeholder='Billing Address' className={inputClasses+(errors.billingAddress?errorClasses:' text-white')}{...register("billingAddress", {required: true, maxLength: 50})}/>
                <input placeholder='Shipping Address' className={'pb-2 '+inputClasses+(errors.shippingAddress?errorClasses:' text-white')} {...register("shippingAddress", {required: true, maxLength: 50})}/>
                <div className='p-2 justify-center flex'>
                    <label className='text-right mr-2 pb-1'>Seller: </label>
                    <input type='checkbox' {...register("isSeller")}/>
                </div>
                <button type="submit" className='bg-neutral-800 p-1 border-black border-2 rounded-md hover:bg-neutral-700'>Submit</button>
            </form>
        </div>
    )
}
export default PartnerForm;