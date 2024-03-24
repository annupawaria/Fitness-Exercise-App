import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {
  console.log(exercises); // Check the data being received

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px" colour="red">
      <Typography variant='h3' mb="49px" color="red">
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent='center'>
        {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
}

export default Exercises;
