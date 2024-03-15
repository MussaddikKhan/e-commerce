import { Box, Button, Grid } from "@mui/material";
import React from "react";
import OrderTraker from "./OrderTraker";
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../address/AddressCard";



const OrderDetails = () => {




  return (

   <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={
                // order.order?.orderStatus === "PLACED"
                //   ? 1
                //   : order.order?.orderStatus === "CONFIRMED"
                //   ? 2
                //   : order.order?.orderStatus === "SHIPPED"
                //   ? 3
                //   : 5
                2
              }
            />
          </Grid>
          <Grid item>
           {true && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {true  && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {[1,1,1,1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://m.media-amazon.com/images/I/61avcz6BP3L._SX679_.jpg"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">VIKKUTEX® Women's Georgette Semi Stitched Pakistani Salwar Suit (Pakistani Pakistani suit-SF171-ver-53 Orange1 Free Size)</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size:L</span>
                  </p>
                  <p>Seller: VIKKUTEX</p>
                  <p>₹3,499 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                //   onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>

     
    </div>
     
   
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
