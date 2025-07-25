import {Routes, Route, BrowserRouter} from "react-router-dom";
import PartnerGrid from "./pages/resources/PartnerGrid.tsx";
import Home from "./pages/home/Home.tsx";
import Layout from "./layout/Layout.tsx";
import ProductGrid from "./pages/resources/ProductGrid.tsx";
import PartnerForm from "./pages/register/PartnerForm.tsx";
import ProductForm from "./pages/register/ProductForm.tsx";
import {PageProvider} from "./context/PageContext.tsx";


const App = () => {

    return (
        <BrowserRouter>
            <PageProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/resources/products" element={<ProductGrid/>} />
                        <Route path="/resources/partners" element={<PartnerGrid/>}/>
                        <Route path='/register/partner' element={<PartnerForm/>} />
                        <Route path='/register/product' element={<ProductForm/>} />
                    </Routes>
                </Layout>
            </PageProvider>
        </BrowserRouter>
    )
}

export default App;