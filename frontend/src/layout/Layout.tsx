import type {ReactNode} from "react";
import './layout.css'
import SideMenu from "./SideMenu.tsx";

type layoutProps = {
    children: ReactNode,
    currentPage:string;
}

const Layout = ({currentPage,children}: layoutProps) => {
    return (
            <div className="root">
                <div className="bg-neutral-800 w-full h-fit border-b-2 border-b-amber-50 p-2 grid grid-cols-3 items-center ">
                    <div className="justify-self-start">{currentPage!=='Home'&&<SideMenu/>}</div>
                    <span className="justify-self-center text-white font-bold text-xl">{currentPage}</span>
                </div>
                {children}
            </div>

    )
}
export default Layout;