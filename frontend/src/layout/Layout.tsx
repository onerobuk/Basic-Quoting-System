import type {ReactNode} from "react";
import './layout.css'
import Header from "./Header.tsx";

type layoutProps = {
    children: ReactNode;
}

const Layout = ({children}: layoutProps) => {
    return (
            <div className="root ">
                <div className="bg-neutral-900 justify-items-center w-full h-fit border-b-2 border-b-amber-50 p-1 ">
                    <Header/>
                </div>
                {children}
            </div>
    )
}
export default Layout;