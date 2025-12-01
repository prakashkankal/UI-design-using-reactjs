import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftPanel = () => {
  return (
    <div className=' w-[25%] h-full p-8 flex flex-col justify-between' >
        <div>
            <h2 className='text-5xl font-bold mb-10 py-5 '>Prospective <br /><span className=' rounded-4xl'>customer</span> <br /> segmentation</h2>
            <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta rerum nulla repudiandae doloribus distinctio harum repellendus animi nostrum porro corrupti </p>    
        </div>
        <button className='flex text-5xl'><i className="ri-arrow-right-up-line"></i></button>
    </div>
  )
}

export default LeftPanel