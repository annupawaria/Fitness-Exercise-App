import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
  
  const[bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () => {
const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
setBodyParts(['all', ...bodyPartsData]);

    }
    fetchExercisesData();
  },[])

  const searchHandle = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExercises(searchExercises);
      setSearch(""); 
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You
        <br />
        Should Know
      </Typography>
      <Box position="relative" mb="63px">
        <TextField
          sx={{
            input: {
              border: "none",
              fontWeight: "700",
            },
            width: {
              lg: "800px",
              xs: "350px",
              backgroundColor: "white",
              borderRadius: "40px",
            },
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="search exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "red",
            color: "white",
            textTransform: "none",
            width: { lg: "176px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          onClick={searchHandle}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relaive',width:"100%",p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
 
      </Box>
      {/* Render search results */}
      {/* {exercise.map((exercise) => (
        <Typography key={exercise.id}>{exercise.name}</Typography>

      ))} */}
    </Stack>
  );
};

export default SearchExercises;
