import React from 'react';

import imgMoi from '../assets/images/moi.jpeg';

const Header = () => {
  return (
    <>
      <div 
      id='header'
      className="text-white mt-6 w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className='text-3xl my-6'>
            Web developer
          </h2>
          <h3 className='text-2xl mb-4'>
            Full Stack
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            className='w-48 h-48 rounded-full my-6'
            src={imgMoi} alt="Image de moi" />
        </div>
        <h4
          
          className='p-4 mt-12 '>
          Passionné par le développement web depuis plusieurs années,
          je me spécialise dans le développement frontend et backend.
          J’ai l’habitude de créer des interfaces utilisateur intuitives et réactives.
          Actuellement disponible,
          je propose mes services en tant que développeur frontend et backend.
        </h4>
      </div>



    </>
  )
}

export default Header