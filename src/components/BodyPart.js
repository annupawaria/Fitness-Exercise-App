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
            // backgroundColor:'skyblue',
            borderBottomLeftRadius:'20px',
            width:'50px',
            height:'50px',
            cursor:'pointer',
            gap:'4px'

        }}
        onClick={()=>{
          setBodyPart(item)
          window.scrollTo({top:1800,left:100,behavior:'smooth'})
        }}
        >
      <img src={Icon} alt='dumbell' style={{width:'20px',height:'20px'}}/>
      <Typography fontSize='24px' fontWeight="bold" color='red' textTransform="capitalize">{item}

      </Typography>
      
    
    </Stack>
  )
}

export default BodyPart
