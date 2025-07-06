import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import RoutingHub from "./RoutingHub.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <RoutingHub />
      </BrowserRouter>
  </StrictMode>,
)
