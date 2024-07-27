import React from 'react'

const Footer = () => {
  return (

    <>

      <footer 
      id='footer'
      className="my-20 p-4 w-full text-2xl">
        <div className="my-6 text-center mt-32">
          <p className="text-white my-4">
            Vous avez un projet ?
          </p>
          <p className="text-white my-4">
            Je serais ravi d&apos;en
          </p>
          <p className="text-white my-4">
            discuter</p>
          <p className="text-white my-4">
            avec vous</p>
          <a href="mailto:dincq.alexandre@gmail.com" 
          className="text-blue-500 hover:text-blue-700 transition duration-500
            ">Contactez moi par mail ici
          </a>

        </div>
      </footer>



    </>


  )
}

export default Footer