import {createContext, type ReactNode, useState} from "react";

export type CurrentPageDetails = {
    pageName:string,
    header:string
}

type PageContextType = {
    page:CurrentPageDetails,
    setPage: (details:CurrentPageDetails)=>void
}

const defaultPageContext:PageContextType = {
    page: {
        pageName:'Home',
        header:'Home'
    },
    setPage:()=>{}
}

export const PageContext = createContext<PageContextType>(defaultPageContext);

export const PageProvider = ({children}:{children:ReactNode}) =>{
    const [page,setPage] = useState<CurrentPageDetails>({
        pageName:'Home',
        header:'Home'
    });

    return(
        <PageContext.Provider value={{page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}

