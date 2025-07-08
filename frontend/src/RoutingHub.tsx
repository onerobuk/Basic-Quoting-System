import {Routes, Route, BrowserRouter} from "react-router-dom";
import Grid from "./Grid.tsx";
import Home from "./pages/home/Home.tsx";
import Layout from "./layout/Layout.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/grid" element={<Grid/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;