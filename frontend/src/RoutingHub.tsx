import {Routes, Route, BrowserRouter} from "react-router-dom";
import PartnerGrid from "./pages/resources/PartnerGrid.tsx";
import Home from "./pages/home/Home.tsx";
import Layout from "./layout/Layout.tsx";
import {useState} from "react";
import ProductGrid from "./pages/resources/ProductGrid.tsx";
import PartnerForm from "./pages/register/PartnerForm.tsx";

const App = () => {
    const [currentPageName,setCurrentPageName] = useState("Home");

    return (
        <BrowserRouter>
            <Layout currentPage={currentPageName}>
                <Routes>
                    <Route path="/" element={<Home setHeaderTitle={setCurrentPageName}/>}/>
                    <Route path="/resources/products" element={<ProductGrid setHeader={setCurrentPageName} />} />
                    <Route path="/resources/partners" element={<PartnerGrid setHeader={setCurrentPageName}/>}/>
                    <Route path='/register/partner' element={<PartnerForm updateHeader={setCurrentPageName}/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;