import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Musaddik Khan</p>

        <p>
          AT/Po Malkapur , Karad , Maharshtra 415530.
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>989230415</p>
        </div>
      </div> 
    </div>
  );
};

export default AddressCard;
