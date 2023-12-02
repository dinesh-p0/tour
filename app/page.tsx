import React from 'react'
import Home from '@/components/Home'
import Explore from '@/components/Explore'
import Guide from '@/components/Guide'
import Testimonals from '@/components/Testimonals'
const page = () => {
  return (
    <div>
      <Home/>
      <Explore/>
      <Guide/>
      <Testimonals/>
    </div>
  )
}

export default page