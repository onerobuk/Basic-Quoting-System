import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface successPageProps{
    message:string,
    redirectTarget:string
    redirectDelay:number
}
const SuccessPage = ({redirectTarget,redirectDelay,message}:successPageProps) =>{
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(()=>{
            navigate(redirectTarget);
        },redirectDelay)

        return()=>clearTimeout(timeout);
    }, [navigate, redirectDelay, redirectTarget]);

    return (
        <div className='bg-neutral-600 text-white items-start w-full h-screen pt-3 grid grid-cols-1 place-items-center'>
            <div className={'text-center pt-58'}>
                <label className='font-bold text-xl'>{message}</label><br/>
                <label className='font-bold text-xl'>Redirecting...</label>
            </div>
        </div>
    )
}
export default SuccessPage;