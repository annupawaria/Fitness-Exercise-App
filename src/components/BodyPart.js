import React from 'react'
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid red' : "",
        // backgroundColor: 'red',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '290px',
        cursor: 'pointer',

        gap: '47px'
      }}



    >
      <img src={Icon} alt="dumbell" style={{ width: '40px', height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" >{item}</Typography>

    </Stack>
  )
}

export default BodyPart