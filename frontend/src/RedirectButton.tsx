import {useNavigate} from "react-router-dom";

interface redirectButtonProps{
    classes,target,buttonText:string
}

const RedirectButton = ({classes,target,buttonText}:redirectButtonProps) =>{
    const navigate = useNavigate();
    return <button onClick={()=>navigate(target)} className={classes}>{buttonText}</button>
}
export default RedirectButton;