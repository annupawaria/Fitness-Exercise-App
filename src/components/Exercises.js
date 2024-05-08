import React,{useEffect,useState} from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage,setCurrentPage]=useState(1)
  const exercisePerPage=9
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


const indexOfLastExercise=currentPage*exercisePerPage
const indexOfFirstExercise=indexOfLastExercise-exercisePerPage
const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)


const paginate =(e,value)=>{
  setCurrentPage(value)
  window.scrollTo({top:1800,behaiour:'smooth'})
}



  return (
    <Box
      id="exercises"
      mt="50px"
      p="20px"
      sx={{ mt: { lg: "110px" } }}
    >
      <Typography variant='h3'>Showing results</Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises &&
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
      </Stack>
<Stack mt="100px" alignItems="center">
{exercises.length > 9 && (
<Pagination color="standard"
page={currentPage}
defaultPage={1}
onChange={paginate}
size='large'
shape="rounded"
count={Math.ceil(exercises.length/exercisePerPage)}



>

</Pagination>
)}


</Stack>

    </Box>
  );
};

export default Exercises;
