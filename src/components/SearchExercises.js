import React from 'react'
import { Box, Button, Stack, Typography, TextField } from "@mui/material"

const SearchExercises = () => {
  return (
    <Stack>
      <Typography sx={{ fontWeight: "700", fontSize: '22px', mb: "20px", justifyContent: "center" }}>
        Awesome Exercises You <br />
        Should know
      </Typography>
      <Box>
        <TextField
          height='76px'
          type='text'
          sx={{ input: { fontWeight: '700', border: "none", borderRadius: "40px", backgroundColor: 'white', }, width: { lg: '1170px', xs: '350px' } }}
          placeholder='Search-Exercises'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}



        >

        </TextField>
        <Button style={{ color: 'White', backgroundColor: "red" }}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises