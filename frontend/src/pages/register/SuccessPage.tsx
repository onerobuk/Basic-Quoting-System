import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Spinner from "../../Spinner.tsx";

interface successPageProps{
    message:string,
    redirectTarget:string
    redirectDelay:number
    topMessage:string,
    bottomMessage:string
}
const SuccessPage = ({redirectTarget,redirectDelay, topMessage, bottomMessage}:successPageProps) =>{
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(()=>{
            navigate(redirectTarget);
        },redirectDelay)

        return()=>clearTimeout(timeout);
    }, [navigate, redirectDelay, redirectTarget]);

    return (
            <Spinner topMessage={topMessage} bottomMessage={bottomMessage}/>
    )
}
export default SuccessPage;