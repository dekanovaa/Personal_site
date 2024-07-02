import './Header.css'
import img from '../../assets/image.jpeg'

function Header() {
 

  return (
    <div className='header' id='header'>
      <div className='container header__container'>
        <img className='header__img' src={img} alt="developergirl"/>
        <div className='header__wrap'>
          <h1 className='header__title'>Hi, I'm <span>Sevinch</span> Frontend Developer</h1>
          <p className='header__text'>I develop websites using modern technologies. Quality and design are very important to me.</p>
          <p className='header__subtext'>FIND WITH ME</p>
          <div className='header__wrapper'>
            <a className='header__link' href="https://github.com/dekanovaa"><i class="fa-brands fa-github"></i></a>
            <a className='header__link' href="https://t.me/frontend_knowledge1"><i class="fa-brands fa-telegram"></i></a>
            <a className='header__link' href="#"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header