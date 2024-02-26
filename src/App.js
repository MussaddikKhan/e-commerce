import React from "react";

import "./App.css";

import Navigation from './customer/components/Navigation/Navigation'
import Homepage from "./customer/Pages/Homepage/Homepage";

function App() {
  return (
    <div className="">
         <Navigation/>
       <div>
          <Homepage/>
       </div>
    </div>
  );
}

export default App;
