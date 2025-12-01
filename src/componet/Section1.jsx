import React from 'react'
import Navbar from './Navbar'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import MainSec from './MainSec'

const Section1 = (prop) => {

  return (
    <div className=' w-full h-screen'>
        <Navbar />
        <MainSec users={prop.users} />
    </div>
  )
}

export default Section1