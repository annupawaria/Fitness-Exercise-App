import React from 'react'
import {Box} from '@mui/material'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Footer from './components/Footer'
import "./App.css";
const App = () => {
  return (
    <Box width='404px' sx={{width:{xl:'1480px'}}} m="auto">
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
</Routes>
<Footer/>
    </Box>
  )
}

export default App