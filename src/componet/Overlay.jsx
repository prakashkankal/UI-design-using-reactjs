import React from 'react'

const Overlay = (prop) => {
  return (
    <div className="absolute inset-0 inset-0 bg-gray-700/50 flex z-10 p-10 flex-col justify-between">
                <h1 className="w-10 h-10 rounded-4xl flex justify-center items-center bg-white">{prop.idx+1}</h1>
                <div className="w-full h-[50%] flex flex-col justify-between text-lg text-white ">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita earum pariatur aut, corporis tempore est blanditiis iste porro recusandae nam inventore cupiditate atque! Rem dolorum eveniet corrupti facilis illo. Nesciunt?</p>

                    <div className="flex justify-around">
                        <button className="bg-blue-500 px-5 py-1 rounded-4xl">{prop.btn}</button>    
                        <button className="bg-blue-500 px-3 py-1 rounded-4xl"><i className="ri-arrow-right-line"></i></button>
                    </div>

                </div>
            </div>
  )
}

export default Overlay