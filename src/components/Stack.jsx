import React from 'react';

import css from '../assets/icons/icons8-css3.svg';
import django from '../assets/icons/icons8-django.svg';
import git from '../assets/icons/icons8-git.svg';
import html from '../assets/icons/icons8-html-5.svg';
import js from '../assets/icons/icons8-javascript.svg';
import node from '../assets/icons/icons8-node-js-48.png';
import python from '../assets/icons/icons8-python.svg';
import react from '../assets/icons/icons8-react-js-100.png';
import sass from '../assets/icons/icons8-sass.svg';
import tailwindcss from '../assets/icons/icons8-tailwindcss.svg';
import vscode from '../assets/icons/icons8-vs-code.svg';



const Stack = () => {
  return (

    <div
      id='stack'
      className="my-16 flex flex-col justify-center items-center
      md:my-24 
      ">
      <h2 className='my-10 text-3xl text-white
      sm:text-4xl
      md:text-6xl md:mt-20
      '>
        Stack
      </h2>
      <div className="my-10 mb-20 gap-10 flex-wrap flex flex-row justify-center items-center w-auto h-auto
      md:gap-20 md:p-10
      ">

        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={django} alt="icone django" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={python} alt="icone python" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={react} alt="icone react" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={js} alt="icone js" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={node} alt="icone node" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={git} alt="icone git" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={vscode} alt="icone vscode" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={html} alt="icone html" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={css} alt="icone css" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={sass} alt="iconesass" />
        <img className='w-14 h-14
        md:w-20 md:h-20 
        ' src={tailwindcss} alt="icone tailwindcss" />

      </div>
    </div>

  )
}

export default Stack