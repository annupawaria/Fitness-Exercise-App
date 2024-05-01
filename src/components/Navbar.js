import React from "react";
import { Box, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="pic" style={{ width: '48px', height: '49px', margin: "0 20px" }} />
      </Link>
      <Stack>
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
        <a href="#exercises">Exercise</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
