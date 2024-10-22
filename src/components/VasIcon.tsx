
import IconButton from '@mui/material/IconButton';
import React from 'react'

interface VasIconProps {
    imagePath: string;
}

const VasIcon = ({imagePath}:VasIconProps) => {
  return (
    <IconButton sx={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          '&:hover':{
            scale:1.05,
            backgroundColor: "Transparent",
            transition: "scale 0.3s ease"
          }
          }}>
          <img
            src={imagePath}
            style={{ height: "auto", minHeight: "40px" }}
          />
        </IconButton>
  )
}

export default VasIcon