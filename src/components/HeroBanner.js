import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
// import { positions } from "@mui/system";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="red" fontWeight="600" fontSize="29px">
        Fitness Club
      </Typography>
      <Typography fontWeight='700' fontSize="23px">
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontWeight="450" font="bold" fontSize="17px" display="flex">Check out the most effective exercises</Typography>
      <Button style={{color:"white",backgroundColor:"red",mb:'20px'}}href="#exercises">Explore Exercises</Button>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box> 
  );
};

export default HeroBanner;
