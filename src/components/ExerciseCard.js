import React from 'react'
import {Button,Stack,Typography} from "@mui/material"
import {Link} from "react-router-dom"


const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`} > 

  <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
<Stack direction="row">
<Button sx={{borderRadius:"20px",ml:"21px",fontSize:"14px", textTransform:"capitalize",color:"black", background:"blue"}}>{exercise.bodyPart}
</Button>
<Button sx={{borderRadius:"20px", ml:"21px",fontSize:"14px",textTransform:"capitalize",color:"black", background:"orange"}}>{exercise.target}
</Button>

</Stack>
<Typography ml="21px" mt="11px" color="black" fontWeight="bold" fontSize="24px">{exercise.name}</Typography>



      </Link>
  )
}

export default ExerciseCard