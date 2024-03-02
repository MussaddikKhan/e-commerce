import React from "react";

import "./App.css";

import Navigation from './customer/components/Navigation/Navigation'
// import Homepage from "./customer/Pages/Homepage/Homepage";
import Footer from "./customer/components/Footer/footer";
import Product from "./customer/components/Product/product";




function App() {
  return (
    <div className="">
         <Navigation/>
       <div>
          {/* <Homepage/> */} 
          <Product/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
