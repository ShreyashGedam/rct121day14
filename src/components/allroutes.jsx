import { Route, Routes } from "react-router-dom"
import { Cart } from "../pages/cart"
import { Home } from "../pages/home"
import Product from "../pages/product"

import { Products } from "../pages/products"

export const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/products/:id" element={<Product></Product>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>

        </div>
    )
}