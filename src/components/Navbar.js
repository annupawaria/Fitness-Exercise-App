import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent='space-around' sx={{gap:{sm:'122px',xs:'42px'},mt:{sm:'30px',xs:'20px'} ,justifyContent:'none'}} px="20px">
      <Link to="/">
        <img src={Logo} alt="pic" style={{ width: '48px', height: '49px', margin: "0 20px" }} />
      </Link>
      <Stack direction="row" sx={{gap:'30px',fontSize:'24px',alignItems:'flex-end'}}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "red",
            borderBottom: '3px solid red'
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{textDecoration: "none"}}>Exercise</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
