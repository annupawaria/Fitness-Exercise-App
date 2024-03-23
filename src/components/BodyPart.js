import React from 'react'
import {Stack,Typography} from '@mui/material'
import Icon from "../assets/icons/gym.png"
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card" 
      display='inline-block'
      sx={{
       borderTop: bodyPart === item ?
             '4px solid red':"",
            backgroundColor:'skyblue',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'

        }}>
      <img src={Icon} alt='dumbell' styles={{width:'20px',height:'20px'}}/>
      
    
    </Stack>
  )
}

export default BodyPart
