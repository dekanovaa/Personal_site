
import './Navbar.css'

function Navbar() {
 

  return (
    <div className='navbar'>
      <div className='container navbar__container'>
        <a href='#' className='navbar__link_logo'>Sevinch</a>
        <nav className='navbar__nav'>
          <a href='#header' className='navbar__link'>Home</a>
          <a href='#portfolio' className='navbar__link'>Portfolio</a>
          <a href='#resume' className='navbar__link'>Resume</a>
          <a href='#service' className='navbar__link'>Service</a>
          <a href='#contact' className='navbar__link'>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar