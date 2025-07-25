import {type ReactNode, useEffect,useContext} from "react";
import {PageContext} from "../context/PageContext.tsx";
import './layout.css'
import SideMenu from "./SideMenu.tsx";

interface layoutProps {
    children: ReactNode,
}

const Layout = ({children}: layoutProps) => {
    const {page} = useContext(PageContext);
    useEffect(() => {
        document.title=page.header;
    }, [page.header]);
    return (
            <div className="root">
                <div className="bg-neutral-800 w-full h-fit border-b-2 border-b-amber-50 p-2 grid grid-cols-3 items-center ">
                    <div className="justify-self-start">{page.pageName!=='Home'&&<SideMenu/>}</div>
                    <span className="justify-self-center text-white font-bold text-xl">{page.pageName}</span>
                </div>
                {children}
            </div>

    )
}
export default Layout;