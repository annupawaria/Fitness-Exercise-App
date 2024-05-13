import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { useParams } from 'react-router-dom'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercise,setTargetMuscleExercise]=useState([])

  const [equipmentExercise,setEquipmentExercise]=useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisedbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
  setExerciseVideos(exerciseVideosData.contents)

  const targetMuscleExerciseData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
 
  const equipmentExerciseData = await fetchData(`${exercisedbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
 




}
fetchExercisesData()
  }, [id]);
return (
  <div>
    <Detail exerciseDetail={exerciseDetail} />
    <SimilarExercises  targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>
    <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
  </div>
)
}

export default ExerciseDetail
