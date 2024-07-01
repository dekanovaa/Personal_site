import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
 

  return (
    <div className='navbar'>
      <div className='container navbar__container'>
        <Link to='/' className='navbar__link_logo'>Sevinch</Link>
        <nav className='navbar__nav'>
          <Link to='/' className='navbar__link'>Home</Link>
          <Link to='/Portfolio' className='navbar__link' href="#portfolio">Portfolio</Link>
          <Link to='/Resume' className='navbar__link'>Resume</Link>
          <Link to='/Service' className='navbar__link'>Service</Link>
          <Link to='/Blog' className='navbar__link'>Blog</Link>
          <Link to='/Contact' className='navbar__link'>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar