import React from "react";
import { Box } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import {Stack} from "@mui/material";
import {Link} from "@mui/material";

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent="space-around" sx={{gap:{sm:'221px',xs:'20px'},mt:{sm:'32px',xs:'20px'},justifyContent:"none"}}>
      <Link to="/">
        <img
          src={Logo}
          alt="pic"
          sx={{ width: "40px", length: "30px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap='40px' alignItems="flex-end">
        <Link to="/">Home</Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#red" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
