import React from 'react'
import Navbar from "./Component/Navbar";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Component/Footer";
import OrderConfirmation from "./Pages/OrderConfirmation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <div className='min-h-screen bg-gray-900 font-sans'>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/CheckOut" element={<CheckOut />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default App;
