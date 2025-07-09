import type {Dispatch, SetStateAction} from "react";

interface homeProps{
    setHeaderTitle:Dispatch<SetStateAction<string>>;
}

const Home = ({setHeaderTitle}:homeProps) =>{
    setHeaderTitle("Home");

    return (
        <div className="bg-neutral-600 text-white justify-items-center w-full h-screen pt-1">
            <p>Home</p>
        </div>
    )
}

export default Home;