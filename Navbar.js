import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
            <div className="container-fluid">
                <img src="https://www.pngitem.com/pimgs/m/71-710178_travel-icon-png-transparent-background-travel-icon-icon.png" width={"80px"} height="50px" alt=''/>
               <Link to="/" className="navbar-brand">Travel Website</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Destination" className="nav-link">Destinations</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}
export default Navbar