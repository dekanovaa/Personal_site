
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'
import Service from './Pages/Service/Service'

function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Blog' element={<Blog/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Portfolio' element={<Portfolio/>}/>
     <Route path='/Resume' element={<Resume/>}/>
     <Route path='/Service' element={<Service/>}/>
    </Routes>
     
    </>
  )
}

export default App
