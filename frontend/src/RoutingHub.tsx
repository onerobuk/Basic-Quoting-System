import {Routes,Route} from "react-router-dom";
import Grid from "./Grid.tsx";

const App = ()=>{
    return(
        <Routes>
            <Route path="/grid" element={<Grid/>} />
        </Routes>
    )
}

export default App;