import {useEffect,useContext} from "react";
import {PageContext} from "../../context/PageContext.tsx";
import {Separator} from "@base-ui-components/react";
import RedirectButton from "../../util/RedirectButton.tsx";


const redirectClasses:string = 'bg-neutral-800 p-2 border-black border-2 rounded-md hover:bg-neutral-700 w-35'
const titleClasses:string = ' text-xl font-bold';


const Home = () =>{
    const {setPage} = useContext(PageContext);

    useEffect(()=>{
        setPage({pageName:'Home',header:'Home'});
    },[setPage])


    return (
        <div className="bg-neutral-600 text-white items-center w-full h-screen flex flex-col gap-y-5 ">
            <h2 className={`${titleClasses} mt-15`}>Quotes</h2>
            <div className={'flex gap-4 h-fit'}>
                <RedirectButton classes={redirectClasses} buttonText={'Create Quote'} target={'/quotes/create'}/>
                <Separator orientation='vertical' className='w-px h-auto bg-white'/>
                <RedirectButton classes={redirectClasses} target={'/quotes/search'} buttonText={'Lookup Quote'} />
            </div>
            <h2 className={titleClasses}>Resources</h2>
            <div className={'flex gap-4 h-fit'}>
                <RedirectButton classes={redirectClasses} buttonText={'Partners'} target={'/resources/partners'}/>
                <Separator orientation='vertical' className='w-px h-auto bg-white'/>
                <RedirectButton classes={redirectClasses} target={'/resources/products'} buttonText={'Products'} />
            </div>
            <h2 className={titleClasses}>Register</h2>
            <div className={'flex gap-4 h-fit'}>
                <RedirectButton classes={redirectClasses} buttonText={'New Partner'} target={'/register/partner'}/>
                <Separator orientation='vertical' className='w-px h-auto bg-white'/>
                <RedirectButton classes={redirectClasses} target={'/register/product'} buttonText={'New Product'} />
            </div>
        </div>
    )
}

export default Home;