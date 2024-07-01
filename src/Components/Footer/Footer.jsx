import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
 

  return (
    <div className='footer'>
        <div className='container footer__container'>
           <ul className='footer__list'>
            <li className='footer__item'>
            <Link to='/Portfolio' className='footer__link'>Portfolio</Link>
          <Link to='/Resume' className='footer__link'>Resume</Link>
          <Link to='/Service' className='footer__link'>Service</Link>
          <Link to='/Blog' className='footer__link'>Blog</Link>
          <Link to='/Contact' className='footer__link'>Contact</Link>
            </li>
            <li className='footer__subitem'>
            <a className='footer__link' href="#"><i id="icon" class="fa-brands fa-github"></i></a>
            <a className='footer__link' href="#"><i id="icon" class="fa-brands fa-telegram"></i></a>
            <a className='footer__link' href="#"><i id="icon" class="fa-brands fa-linkedin"></i></a>
            <a className='footer__link' href="#"><i id="icon" class="fa-brands fa-instagram"></i></a>
            </li>
            <p className='footer__text'>Dekanova Sevinch</p>
           </ul>
        </div>
     
    </div>
  )
}

export default Footer