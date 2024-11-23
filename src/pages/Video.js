import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoPage from '../components/VideoPage'

const Video = () => {
  return (
    <div>
       
      <Navbar/>
      <div className='lg:pt-24 pt-16'>
      <VideoPage/>
      </div>
      <Footer/>
    
    </div>
  )
}

export default Video
