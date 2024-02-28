import React from "react";

import "./App.css";

import Navigation from './customer/components/Navigation/Navigation'
import Homepage from "./customer/Pages/Homepage/Homepage";
import Footer from "./customer/components/Footer/footer";

function App() {
  return (
    <div className="">
         <Navigation/>
       <div>
          <Homepage/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
