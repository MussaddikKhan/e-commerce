import React from "react";

import "./App.css";

import Navigation from './customer/components/Navigation/Navigation'
// import Homepage from "./customer/Pages/Homepage/Homepage";
import Footer from "./customer/components/Footer/footer";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";




function App() {
  return (
    <div className="">
         <Navigation/>
       <div>
          {/* <Homepage/> */} 
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          <Cart/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
