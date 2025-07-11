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
    }, [navigate,redirectTarget,redirectDelay]);

    return (
        <div className='bg-neutral-600 text-white flex items-start w-full h-screen pt-3 justify-center justify-self-center'>
            <label className='font-bold pt-50'>{message}</label><br/>
            <label className='font-bold pt-50'>Redirecting...</label>
        </div>
    )
}
export default SuccessPage;