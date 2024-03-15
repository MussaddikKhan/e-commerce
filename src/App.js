import React from "react";

import "./App.css";


// import Homepage from "./customer/Pages/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
// import Cart from "./customer/components/Cart/Cart";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
     

     
    </div>
  );
}

export default App;
