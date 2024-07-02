import './Portfolio.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'

function Portfolio() {

  return (
    <>
    <hr />
    <div className='portfolio' id='portfolio'>
      <div className='container portfolio__container'>
      <p className='portfolio__text'>YOU CAN SEE MY WORK BY CLICKING THE LINKS</p>
        <h1 className='portfolio__title'>My Portfolio</h1>
        <nav className='portfolio__nav'>
          <a className='portfolio__link' href="https://business-taour.vercel.app/">Travel</a>
          <a className='portfolio__link' href="https://discover-invest-two.vercel.app/">Discover Invest</a>
          <a className='portfolio__link' href="https://build-ten-zeta.vercel.app/">Ataev Build</a>
          <a className='portfolio__link' href="https://react-route-teal.vercel.app/">Max Way</a>
          <a className='portfolio__link' href="https://coffee-wbg7.vercel.app/">Coffee</a>
          <a className='portfolio__link' href="https://designo-three-zeta.vercel.app/">Art</a>
        </nav>
        <div className='portfolio__wrap'>
          <img className='portfolio__img' src={img1} alt="port" />
          <img className='portfolio__img' src={img2} alt="port" />
          <img className='portfolio__img' src={img3} alt="port" />
          <img className='portfolio__img' src={img4} alt="port" />
          <img className='portfolio__img' src={img5} alt="port" />
          <img className='portfolio__img' src={img6} alt="port" />
          <img className='portfolio__img' src={img7} alt="port" />
          <img className='portfolio__img' src={img8} alt="port" />
          <img className='portfolio__img' src={img9} alt="port" />
        </div>
        <a className='portfolio__link' href="https://github.com/dekanovaa">Explore More</a>
      </div>
    </div>
    </>
  )
}

export default Portfolio