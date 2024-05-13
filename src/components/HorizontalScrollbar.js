import React,{useContext} from 'react'
import { Box,Typography } from "@mui/material"
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import {  VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from "./ExerciseCard"

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart,isBodyParts }) => {

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };



  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}  >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          style={{ marginRight: '10px' }}
        >
          {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          :<ExerciseCard exercise={item}/>
        }
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar;
