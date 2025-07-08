import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutingHub from "./RoutingHub.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RoutingHub />
  </StrictMode>,
)
