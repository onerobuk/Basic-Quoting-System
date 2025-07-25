import {useEffect, useState,useContext} from "react";
import {PageContext} from "../../context/PageContext.tsx";
import type {SubmitHandler} from "react-hook-form";
import {useForm} from "react-hook-form";
import SuccessPage from "./SuccessPage.tsx";

interface productFormI {
    name:string,
    price:number,
    sellerId:number,
    currencyCode:string
}

interface productDTO {
    id:number,
    name:string,
    price:number,
    sellerId:number,
    currencyCode:string;
}

interface productReq {
    entity:productDTO,
    username:string
}

const ProductForm = () =>{
    const [submitted,setSubmitted] = useState<boolean>(false);
    const {setPage} = useContext(PageContext);

    useEffect(()=>{
        setPage({pageName:'Register New Partner',header:'Register'});
    },[setPage])

    const inputClasses:string = 'border-black border-2 rounded-md p-1 bg-neutral-600 mt-4'
    const errorClasses:string = ' bg-red-200 text-black';

    const {register,handleSubmit,formState:{errors}} = useForm<productFormI>();
    const onSubmit: SubmitHandler<productFormI> = async (data:productFormI)=> {
        const dto:productDTO = {
            id:null,
            ...data
        }
        const request:productReq = {
            entity:dto,
            username:'test'
        }
        try{
            const response = await fetch('http://localhost:8080/products',{
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

    const validateSeller = async (partnerId:number) =>{
        try{
            const response = await fetch(`http://localhost:8080/partners/${partnerId}`,
                {
                    method:'GET',
                    headers:{
                        'Frontend-Key':'tricephalos'
                    }
                });
            if (!response.ok){
                throw new Error(`Frontend: no partner with id ${partnerId} found`)
            }
            return true;
        } catch (error) {
            console.log('Seller validation error: ',error);
            return false;
        }
    }

    if(submitted){
        return <SuccessPage redirectDelay={3000} redirectTarget={'/resources/products'} topMessage={'New Product Successfully Registered'} bottomMessage={'Redirecting...'}/>
    }

    return(
        <div className='bg-neutral-600 text-white justify-items-center w-full h-screen pt-1'>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-center p-3">
                <input placeholder='Name' className={inputClasses+(errors.name?errorClasses:' text-white')} {...register("name", {required: true, maxLength: 50})}/>
                <input placeholder='Price' className={inputClasses+(errors.price?errorClasses:' text-white')}{...register("price", {required: true, pattern: {value: /^\d+(\.\d{2})$/} })}/>
                {errors.sellerId && <h2>Partner with submitted ID does not exist</h2>}
                <input placeholder='Seller Id' className={inputClasses + (errors.sellerId ? errorClasses : ' text-white')}{...register("sellerId", {required: true, validate: value => {return validateSeller(value);}})}/>
                <select className={'pb-2 '+inputClasses+(errors.currencyCode?errorClasses:' text-white')} {...register("currencyCode", {required: true, maxLength: 3})}>
                    <option value="" selected disabled>Select a Value</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value='EUR'>EUR</option>
                    <option value='CAD'>CAD</option>
                    <option value='AUD'>AUD</option>
                    <option value='INR'>INR</option>
                    <option value='RUB'>RUB</option>
                    <option value='JPY'>JPY</option>
                    <option value='HKD'>HKD</option>
                    <option value='CNY'>CNY</option>
                </select>
                <button type="submit" className='bg-neutral-800 p-1 border-black border-2 rounded-md mt-3.5 hover:bg-neutral-700'>Submit</button>
            </form>
        </div>
    )
}
export default ProductForm;