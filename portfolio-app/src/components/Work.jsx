import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'
const Work = () => {
  return (
    <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div classname = 'mac-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div calssName= 'pb-8'>
                <p className= 'text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className= 'py-6'>// Check out some of my recent work</p>
            </div>

            <div style={{backgroundImage:`url(${workImg})`}}classname= 'grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span>
                        </span>
                        <div>
                            <a href='/'>
                                <button>

                                </button>
                            </a>
                            <a href='/'>
                                <button>

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work