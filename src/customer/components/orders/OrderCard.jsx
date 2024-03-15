import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div  onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://m.media-amazon.com/images/I/61avcz6BP3L._SX679_.jpg"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">VIKKUTEX® Women's Georgette Semi Stitched Pakistani Salwar Suit (Pakistani Pakistani suit-SF171-ver-53 Orange1 Free Size)</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: M</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹₹3,499</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {true ? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
              </>}
            
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          {true  && (
            <div
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
