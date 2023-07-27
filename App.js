import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import Home from './Components/Home'
import Destination from './Components/Destination'
import footer from './Components/footer'
import About from './Components/About'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'

function App(){
    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Destination' element={<Destination/>}/>
            <Route path='/footer' element={<footer/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;