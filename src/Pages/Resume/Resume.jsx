import './Resume.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Resume() {
 

  return (
    <>
    <Navbar/>
    <div className='resume'>
      <div className='container resume__container'>
        <h1 className='resume__title'>Sevinch Dekanova</h1>
        <div className='resume__row'>
          <p className='resume__text'>Tashkent,Uzbekistan | </p>
          <a className='resume__link' href="#">dekanovasevinchhh@gmail.com</a>
          <p className='resume__text'>| +998932251944</p>
        </div>
        <hr className='resume__hr'/>
        <p className='resume__text'>A programmer who is interested in web programming and is learning knowledge in this field</p>
        <h3 className='resume__name'>EDUCATION</h3>
        <p className='resume__text'>Tashkent University of Information Technologies</p>
        <span className='resume__span'>
          <p className='resume__subtext'>Information communication technologies</p>
          <p className='resume__text'>Expected, May 2026 </p>
        </span>
        <p className='resume__text'>-Courses: Database, Web Programming, Algorithms, Cyber ​​Security, Probability Theory and Mathematical Statistics etc...</p>
        <p className='resume__text'>-Overall GPA: 4.06</p>
        <h3 className='resume__name'>My skills</h3>
        <p className='resume__text'>-Html</p>
        <p className='resume__text'>-Css</p>
        <p className='resume__text'>-JavaScript</p>
        <p className='resume__text'>-ReactJS</p>
        <p className='resume__text'>-Tailwind</p>
        <p className='resume__text'>-API</p>
        <p className='resume__text'>-Git</p>
        <h3 className='resume__name'>WORK EXPERIENCE</h3>
        <p className='resume__text'>Frontend developer</p>
        <p className='resume__subtext'>Business Travel</p>
        <p className='resume__text'>-Designed dynamic pages using Css,Html5,ReactJS</p>
        <p className='resume__text'>-Libraries such as MU, ANT were used</p>
        <p className='resume__text'>-Pages are localized in 3 languages ​​using i18next</p>
        <p className='resume__text'>Frontend developer</p>
        <p className='resume__subtext'>Ataev Build</p>
        <p className='resume__text'>-Designed dynamic pages using Css,Html5,ReactJS</p>
        <p className='resume__text'>-Libraries such as MU, ANT were used</p>
        <p className='resume__text'>-Pages are localized in 3 languages ​​using i18next</p>
        

        




 
      </div>

    </div>
    <Footer/>
     
    </>
  )
}

export default Resume