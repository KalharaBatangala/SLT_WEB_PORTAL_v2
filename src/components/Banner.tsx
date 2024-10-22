import Box from '@mui/material/Box'
import React from 'react'
import BannerImage from '../assets/images/banner.png'


const Banner = () => {
  return (
    <Box sx={{width:"100%",position:"relative",bottom:"10px"}}
    >
        <img width="100%" src={BannerImage}/>
    </Box>
  )
}

export default Banner