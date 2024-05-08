import React from 'react'

import Footer from '../footer'
import FAQ from '../FAQ'
import AnnouncementBar from '../Annoucement-bar/AnnouncementBar'
import Catlog from '../Catalogs/Catlog'
import HotProducts from '../HotProducts/HotProducts'
import Whyvp from '../WhyVp/WhyVp' 
// import { Container } from '@mui/material'

const Home = () => {
  return (

    <>
     
      <AnnouncementBar/>
      <Catlog/>
      <HotProducts/>
      <Whyvp/>
      <FAQ/>
      <Footer/>

    </>
  )
}

export default Home