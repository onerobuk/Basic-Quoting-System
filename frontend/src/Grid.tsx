'use client';
import './App.css'
import type {ColDef} from 'ag-grid-community'
import {AllCommunityModule, ModuleRegistry} from 'ag-grid-community'
import {AgGridReact} from "ag-grid-react";
import * as React from "react";
import {useEffect} from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Irow{
  make:string;
  model:string;
  price:number;
  electric:boolean;
}

const Grid:React.FC = () => {
  const rowData:Irow[] = [
    {make:"Tesla",model:"Model Y", price: 40000, electric:true},
    {make:"Ford",model:"Mustang", price:45000,electric:false},
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false }
  ]

  const colDefs:ColDef<Irow>[] = [
    {field:"make"},
    {field: "model"},
    {field: "price"},
    {field: "electric"}
  ]

  const defaultColDef: ColDef = {
    flex:1
  }

  useEffect(()=>{
    document.title="Grid";
  },[])

  return (
    <div style={{width:"500px",height:"500px"}}>
      <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
      />
    </div>
  )
}

export default Grid
