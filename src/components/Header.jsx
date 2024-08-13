import React from 'react';

import imgMoi from '../assets/images/moii.jpg';

const Header = () => {
  return (
    <>
      <div
        id='header'
        className="text-white mt-6 w-full">

        <div className="
        md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20
        ">

          <div className="flex flex-col justify-center items-center w-full">
            <h2 className='text-3xl my-6
              sm:text-4xl
              md:text-5xl md:mt-10
              '>
              Web developer
            </h2>
            <h3 className='text-2xl mb-4
              sm:text-3xl
              md:text-4xl md:mt-10
              '>
              Full Stack
            </h3>
          </div>

          <div className="flex flex-row justify-center items-center w-full">
            <img
              className='w-48 h-48 rounded-xl my-6
              sm:w-60 sm:h-60
              md:w-72 md:h-72 md:mt-10
              '
              src={imgMoi} alt="Image de moi" />
          </div>
        </div>

        <h4
          className='p-4 mt-12 
          md:text-3xl md:p-10
          '>
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