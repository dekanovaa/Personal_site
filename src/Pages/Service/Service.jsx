import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Service.css'

function Service() {
 

  return (
    <>
    <hr />
    <div className='service' id='service'>
      <div className='container service__container'>
        <p className='service__text'>SERVICES</p>
        <h1 className='service__title'>What I Do</h1>
        <ul className='service__list'>
          <li className='service__item'>
          <i class="fa-brands fa-html5"></i>
            <h4 className='service__name'>Creating a web page structure</h4>
            <p className='service__subtext'>I create the general structure and style of the website using Html, Css. I can also use different libraries and etc...</p>

          </li>
          <li className='service__item'>
          <i class="fa-solid fa-mobile"></i>
          <h4 className='service__name'>Responsive design</h4>
          <p className='service__subtext'>I ensure that the website looks correct in different screen sizes (computer, tablet, phone). I ensure that the website works correctly in different browsers etc...</p>
          </li>
          <li className='service__item'>
          <i class="fa-brands fa-js"></i>
          <h4 className='service__name'>Working with APIs</h4>
          <p className='service__subtext'>I add dynamic elements and interactivity to the page using JavaScript. I can integrate with the backend and use APIs to receive or send data etc...</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Service