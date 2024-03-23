import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <div key={item.id || item} style={{ display: 'inline-block', margin: '0 10px',direction:"row" }}>
          <Box
            itemId={item.id || item}
            title={item.id || item}
            style={{ display: 'inline-block', margin: '0 10px', direction:"row" }}
          >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
