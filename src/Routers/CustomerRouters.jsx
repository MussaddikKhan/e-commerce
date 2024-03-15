import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/Pages/Homepage/Homepage";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/Product/product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/orders/Order";
import OrderDetails from "../customer/components/orders/OrderDetails";

const CustomerRouters = () => {
 
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={ <Order/> }></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      </Routes>

    
  
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
