import type {ReactNode} from "react";
import './layout.css'
import Header from "./Header.tsx";

type layoutProps = {
    children: ReactNode;
}

const Layout = ({children}: layoutProps) => {
    return (
            <div className="root justify-items-center w-fit h-fit">
                <Header />
                {children}
            </div>
    )
}
export default Layout;