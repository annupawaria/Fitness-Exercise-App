import React from 'react'
import {Stack,Typography,Box} from'@mui/material'


const ExerciseVideos = ({ExerciseVideos,name}) => {
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px'>
Watch <span style={{color:'red',textTransform:'capitalize'}}>{name}</span>exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}}>

      </Stack>
    </Box>
  )
}

export default ExerciseVideos
