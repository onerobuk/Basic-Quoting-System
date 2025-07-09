'use client';
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry, themeQuartz} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import {type Dispatch, type SetStateAction, useEffect, useState} from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface product {
    id:number,
    name: string,
    price:number,
    sellerId:number,
    currencyCode:string,
}

interface partnerGridProps{
    setHeader:Dispatch<SetStateAction<string>>;
}

const ProductGrid= ({setHeader}:partnerGridProps) => {
    const [products,setProducts] = useState<product[]>([]);
    const [isLoading,setIsLoading] = useState(true);

    async function getProducts(){
        try{
            const response = await fetch('http://localhost:8080/products/',{
                method:'GET',
                headers: {
                    'Frontend-Key':'tricephalos'
                }
            })
            if(!response.ok){
                throw new Error(`HTTP ERROR: ${response.status}`)
            }
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
        {field: "sellerId"},
        {field: "currencyCode"}
    ]

    const defaultColDef: ColDef = {
        flex: 1
    }

    useEffect(() => {
        setHeader("All Products");
        document.title = "Products";
        getProducts();
    }, [])

    if(isLoading) {
        return(
        <div className="flex h-dvh w-full bg-neutral-600 justify-center">
            <p className=" text-white pt-64 font-bold">Loading...</p>
        </div>)
    }
    else if (products.length==0){
        return(
            <div className="flex h-dvh w-full bg-neutral-600 justify-center">
                <p className=" text-white pt-64 font-bold">No Products Found</p>
            </div>
        )

    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-neutral-600">
            <div style={{width: "50%", height: "50%"}}>
                <AgGridReact
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
