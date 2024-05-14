import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Logo from "../assets/images/Logo-1.png"
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="pink">
        <Stack  gap="40px" alignItems="center" px="40px" pt="24px">
            <img src={Logo} width="200px" height="40px"/>
            <Typography variant="h5" pb="40px" mt="20px">Made with love by javascript mastry</Typography>
        </Stack>
    </Box>
  )
}

export default Footer