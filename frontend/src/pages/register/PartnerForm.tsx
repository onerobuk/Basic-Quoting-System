import {type Dispatch, type SetStateAction, useEffect} from "react";
import {useForm} from "react-hook-form";
import type {SubmitHandler} from "react-hook-form";

interface partnerFormProps{
    updateHeader:Dispatch<SetStateAction<string>>
}

enum formBool{
    'yes'=true,
    'no' = false
}

interface partnerFormI {
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    isSeller:formBool
}

interface partnerDTO{
    partnerId:number,
    partnerName:string,
    partnerEmail:string,
    shippingAddress:string,
    billingAddress:string,
    isSeller:formBool
}

interface partnerReq{
    entity:partnerDTO,
    username:string
}

const PartnerForm = ({updateHeader}:partnerFormProps) =>{
    useEffect(()=>{
        updateHeader('Register New Partner');
    },[updateHeader])

    const inputClasses:string = 'border-black border-2 rounded-md p-1 bg-neutral-600 mt-4'
    const errorClasses:string = ' bg-red-200 text-black';

    const {register,handleSubmit,formState:{errors}} = useForm<partnerFormI>();
    const onSubmit: SubmitHandler<partnerFormI> = async (data:partnerFormI)=> {
        const dto:partnerDTO = {
            partnerId:null,
            ...data
        }
        const request:partnerReq = {
            entity:dto,
            username:'test'
        }
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
            console.log('POST successful: ',result);
        } catch (error){
            console.error('Partner POST error: ',error);
        }
    };
    return(
        <div className='bg-neutral-600 text-white justify-items-center w-full h-screen pt-1'>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-center p-3">
                <input placeholder='Name' className={inputClasses+(errors.partnerName?errorClasses:' text-white')} {...register("partnerName", {required: true, maxLength: 50})}/>
                <input placeholder='Email' className={inputClasses+(errors.partnerEmail?errorClasses:' text-white')}{...register("partnerEmail", {required: true, maxLength: 50})}/>
                <input placeholder='Billing Address' className={inputClasses+(errors.billingAddress?errorClasses:' text-white')}{...register("billingAddress", {required: true, maxLength: 50})}/>
                <input placeholder='Shipping Address' className={'pb-2 '+inputClasses+(errors.shippingAddress?errorClasses:' text-white')} {...register("shippingAddress", {required: true, maxLength: 50})}/>
                <label className={'text-center rounded-md'+(errors.partnerName?errorClasses:' text-white')}>Are you selling products?</label>
                <div className='p-2 justify-center grid grid-cols-4'>
                    <label className='text-right'>Yes</label>
                    <input {...register("isSeller", {required: true})} type="radio" value="Yes"/>
                    <label className='text-right'>No</label>
                    <input {...register("isSeller", {required: true})} type="radio" value="No"/>
                </div>
                <button type="submit" className='bg-neutral-800 p-1 border-black border-2 rounded-md hover:bg-neutral-700'>Submit</button>
            </form>
        </div>
    )
}
export default PartnerForm;