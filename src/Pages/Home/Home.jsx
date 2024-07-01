import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import '../../Pages/Contact/Contact.css'
import '../../Pages/Portfolio/Portfolio.css'
import './Home.css'

function Home() {
 

  return (
    <div className='home'>
        <Navbar/>
        <Header/>
    <Footer/>
    </div>
  )
}

export default Home