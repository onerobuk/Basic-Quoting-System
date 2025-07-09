import {Routes, Route, BrowserRouter} from "react-router-dom";
import PartnerGrid from "./PartnerGrid.tsx";
import Home from "./pages/home/Home.tsx";
import Layout from "./layout/Layout.tsx";
import {useState} from "react";
import ProductGrid from "./ProductGrid.tsx";

const App = () => {
    const [currentPageName,setCurrentPageName] = useState("Home");

    return (
        <BrowserRouter>
            <Layout currentPage={currentPageName}>
                <Routes>
                    <Route path="/" element={<Home setHeaderTitle={setCurrentPageName}/>}/>
                    <Route path="/resources/products" element={<ProductGrid setHeader={setCurrentPageName} />} />
                    <Route path="/resources/partners" element={<PartnerGrid setHeader={setCurrentPageName}/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;