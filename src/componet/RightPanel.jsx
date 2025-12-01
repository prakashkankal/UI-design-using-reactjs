import React from 'react'
import Card from './Card'

const RightPanel = (prop) => {
  
  return (
    <div id='rightpanel' className='w-[75%] p-6 flex gap-5 overflow-x-auto'>
        {
          prop.users.map(function(elem, idx){
            return <Card image={elem.image} btn={elem.btn} idx={idx}/>
          })
        }
    </div>
  )
}

export default RightPanel