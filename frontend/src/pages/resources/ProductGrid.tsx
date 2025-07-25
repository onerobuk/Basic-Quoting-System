'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import {useEffect, useState,useContext} from "react";
import {PageContext} from "../../context/PageContext.tsx";
import PopupCellRenderer from "./partnerPopupCellRenderer.tsx";
import Spinner from "../../util/Spinner.tsx";

ModuleRegistry.registerModules([AllCommunityModule]);

interface product {
    id:number,
    name: string,
    price:number,
    sellerId:number,
    currencyCode:string,
}


const ProductGrid= () => {
    const [products,setProducts] = useState<product[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const [gridReady,setGridReady] = useState(false);
    const {setPage} = useContext(PageContext);

    useEffect(() => {
        setPage({pageName:"All Products",header:"Products"});
        getProducts();
    }, [setPage])

    async function getProducts(){
        try{
            const response = await fetch('http://localhost:8080/products',{
                method:'GET',
                headers: {
                    'Frontend-Key':'tricephalos'
                }
            })
            if(!response.ok){
                throw new Error(`HTTP ERROR: ${response.status}`)
            }
            console.log("Product GET request success");
            const data = await response.json();
            const newProducts:product[] = data.map((item:product)=>({
                id: Number(item.id),
                name: String(item.name),
                price: String(item.price),
                sellerId: String(item.sellerId),
                currencyCode: String(item.currencyCode),
            }))
            setProducts(newProducts)
        } catch (error){
            console.error('Product Fetch error: ',error);
        } finally {
            setIsLoading(false);
        }
    }

    const colDefs: ColDef<product>[] = [
        {field: "id"},
        {field: "name"},
        {field: "price"},
        {
            field: "sellerId",
            cellRenderer: PopupCellRenderer
        },
        {field: "currencyCode"}
    ]

    const defaultColDef: ColDef = {
        flex: 1
    }

    if(isLoading) {
        return <Spinner topMessage={''} bottomMessage={'Loading...'}/>
    }
    else if (products.length==0){
        return(
            <div className="flex h-dvh w-full bg-neutral-600 justify-center">
                <p className=" text-white pt-58 font-bold text-xl">No Products Found</p>
            </div>
        )

    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-neutral-600">
            <div style={{width: "50%", height: "50%"}}>
                <AgGridReact
                    onGridReady={()=>setGridReady(true)}
                    context={{gridReady}}
                    theme={themeQuartz}
                    rowData={products}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    )
}

export default ProductGrid;
