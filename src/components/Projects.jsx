import videoCVGen from '../assets/videos/cvgen.mp4';
import videoOhmyfood from '../assets/videos/ohmyfood.mp4';
import videoKasa from '../assets/videos/kasa.mp4'





const Projects = () => {

  return (
    <>
      <div id='projects'
        className="my-2 mb-24 flex flex-col justify-center items-center w-72 h-auto gap-10">
        <div className="">
          <h2 className='my-6 mb-10 text-3xl text-white'>Projets</h2>
        </div>

        <div className="">
          <div className="">
            <h2 className='my-2 text-2xl text-white'>CVGen</h2>

            <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center'>CVGen est une application web qui permet de générer un CV en ligne.
              L&apos;utilisateur peut choisir parmi plusieurs templates de CV,
              puis remplir les champs de formulaire pour générer un CV en format PDF.
            </p>
          </div>
          <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
            <video
              width="600"
              controls
              muted
              preload="auto">
              <source src={videoCVGen} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href="https://github.com/dagarbolino/vitae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            Voir le projet sur GitHub
          </a>


        </div>

        <div className="mt-10">
          <div className="">
            <h2 className='my-2 text-2xl text-white'>Kasa</h2>
            <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center'>
              Kasa est l'intégration d'une maquette en React pour un site d'agence immobilière. 
              Le site comprend une page d'accueil, une redirection vers le détail d'un appartement ou d'une maison avec leur description, 
              ainsi qu'une page "À propos".
            </p>
          </div>
          <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
            <video
              width="600"
              controls
              muted

              preload="auto">
              <source src={videoKasa} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href="https://github.com/dagarbolino/Kaza-master"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            Voir le projet sur GitHub
          </a>
        </div>



        <div className="mt-10">
          <div className="">
            <h2 className='my-2 text-2xl text-white'>ohmyfood</h2>
            <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center'>
              Ohmyfood est un site web de réservation de menus de restaurants gastronomiques.
              L'utilisateur peut choisir un menu parmi une sélection de restaurants, puis voir leurs differents plats qui sont proposés. 
            </p>
          </div>
          <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
            <video
              width="600"
              controls
              muted

              preload="auto">
              <source src={videoOhmyfood} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href="https://github.com/dagarbolino/Ohmyfood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            Voir le projet sur GitHub
          </a>
        </div>




        <div className="mt-10">
          <div className="">
            <h2 className='my-2 text-2xl text-white'>Au Beurre Noisette</h2>
            <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center'>
              Au Beurre Noisette est un commerce non sédentaire, de vente de produits laitiers et de fromages.
              Sur ce site web, vous pouvez découvrir une sélection de fromages, filtrés par type de lait et de pâte.
              nous pouvons consultez les lieux de vente, explorez divers des recettes. 
            </p>
          </div>
          <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
            <video
              width="600"
              controls
              muted

              preload="auto">
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href="https://github.com/dagarbolino/noisette/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            Voir le projet sur GitHub
          </a>
        </div>




      </div>


    </>
  )
}

export default Projects