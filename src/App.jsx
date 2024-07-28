import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'

function App() {

  return (
    <section
      className='scroll-smooth flex flex-col items-center justify-start w-full h-full bg-gray-700
      
      '>

      <Navbar />

      <Header />

      <Stack />

      <Projects />

      <Footer />
      
    </section>
  )
}

export default App
