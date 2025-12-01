import React from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const MainSec = (prop) => {
  
  return (
    <div className='w-full h-[90%] flex justify-between p-10 gap-10 '>
        <LeftPanel />
        <RightPanel users={prop.users} />
    </div>
  )
}

export default MainSec