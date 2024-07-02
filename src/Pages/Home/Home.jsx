import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Service from '../../Pages/Service/Service'
import Portfolio from '../../Pages/Portfolio/Portfolio'
import Contact from '../../Pages/Contact/Contact'
import Resume from '../../Pages/Resume/Resume'
import './Home.css'

function Home() {
 

  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <Service/>
        <Portfolio/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home