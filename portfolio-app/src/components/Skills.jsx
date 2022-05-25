import React from 'react'


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import Tensorflow from '../assets/tensorflow.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Solidity from '../assets/solidity.png'
import Postgres from "../assets/postgres.png"
import Docker from "../assets/docker.png"
import Ganache from "../assets/ganache.png"
import Truffle from "../assets/truffle.png"


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      {/* Containers*/}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col h-full'>
        <div>
          <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Experience:</p>
          <p className='py-4'>These are the technologies I have experience with</p>
        </div>

        <div className='w-full grid grid-cols-4 md:grid-cols-3 sm:grid-col-2 gap-4 text-center py-8'>
          <div className= 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt= "HTML icon" />
            <p className='my-4'>HTML</p>           
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
            <p className= 'my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className= 'my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Postgres} alt="PostgreSQL icon" />
            <p className = 'my-4'>POSTGRESQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={AWS} alt="AWS icon" />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>``
            <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Docker} alt="Docker icon" />
            <p className='my-4'>DOCKER</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tensorflow} alt="Tensorflow icon"/>
            <p className='my-4'>TENSORFLOW</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Solidity} alt="Solidity icon" />
            <p className='my-4'>SOLIDITY</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Ganache} alt="Ganache icon" />
            <p className='my-4'>GANACHE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Truffle} alt="Truffle icon" />
              <p className='my-4'>TRUFFLE</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Skills