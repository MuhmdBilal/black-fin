import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import logo from "../../Assets/cropped-Urban-Wht-logo-300x79-1.png"
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {AiOutlineRight} from "react-icons/ai"
function Navbars({ state }) {
  const { pathname } = useLocation();
  const [color, setColor] = useState("home")
  const auth = localStorage.getItem("user")
  const ChangeColor = ()=>{
    if(pathname){
    if(pathname == "/home"){
      setColor("home")
    }else if(pathname == "/aboutus"){
      setColor("about us")
    }else if(pathname == "/account"){
      setColor("account")
    } else if(pathname == "/contact"){
      setColor("contact")
    }
    }
  }

  return (
    <div className=''>
      {
        state ? (
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: "#fae5df" }}>
            <div className="container">
              <a className="navbar-brand" href="#"><img src={logo} width="150px" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
              </button>
              <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0  w-100 d-flex justify-content-evenly align-items-center">
                  <li className="nav-item">
                    <Link to="/home" style={{ textDecoration: "none" }}><a className={color == "home" ? "nav-link text-a-active" : "nav-link text-a"} aria-current="page" href="" id="home" onClick={()=>{setColor("home")
                  window.scroll(0,0)
                  }}>HOME</a></Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ABOUT
                    </a>
                    <ul className="dropdown-menu">
                      <Link to="/aboutus" style={{ textDecoration: "none" }}> <li><a className="dropdown-item" href="" id="about us" onClick={()=>{window.scroll(0,0)}}>ABOUT US</a></li></Link>
                      <Link to="/faq" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>FAQ'S</a></li></Link>
                      <Link to="/testimonial" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>TESTIMONIAL</a></li></Link>
                      {/* <li><a className="dropdown-item" href="#">BLOG</a></li> */}
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      LOCATIONS
                    </a>
                    <ul className="dropdown-menu">
                      <Link to="/sanfrancisco" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>SAN FRANCISCO</a></li></Link>
                      <Link to="/losangeles" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>LOS ANGELES</a></li></Link>
                      <Link to="/hawaii" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>HAWAII</a></li></Link>
                      <Link to="/all_location" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>ALL LOCATIONS</a></li></Link>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SERVICES
                    </a>
                    <ul className="dropdown-menu">
                       <li className="dropdown-item hover-me"><a href='#' style={{textDecoration: "none", color: "white"}}>AIRPORT TRANSFERS</a> <AiOutlineRight className="" style={{float: "right", marginTop: "5px"}}/>
                       <div className='sub-menu-2'>
                        <ul className=''>
                          <Link to="/SanFranciscoAirport" style={{ textDecoration: "none" }}><li><a href='' className="dropdown-item" onClick={()=>{window.scroll(0,0)}}>San Francisco Airport Transportation</a></li></Link>
                         <Link to="/laxairport" style={{ textDecoration: "none" }}><li className="dropdown-item" onClick={()=>{window.scroll(0,0)}}>LAX Airport Transportation</li></Link> 
                          <Link to="/hnlairport" style={{ textDecoration: "none" }}><li className="dropdown-item" onClick={()=>{window.scroll(0,0)}}>HNL Airport Transportation</li></Link>
                        </ul>
                       </div>
                       </li>
                      <Link to="/executivecarservice" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>EXECUTIVE CAR SERVICE</a></li></Link>
                      <Link to="/BusinessMeethings" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>BUSINESS MEETINGS + EVENTS</a></li></Link>
                      <Link to="/privateChauffeur" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>PRIVATE CHAUFFEUR SERVICE</a></li></Link>
                      <Link to="/priavteaviation" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>PRIVATE AVIATION NETWORK</a></li></Link>
                      <Link to="/pointtopoint" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>POINT-TO-POINT + HOURLY</a></li></Link>
                      {/* <li><a className="dropdown-item" href="#">WINERY TOURS + TASTINGS</a></li> */}
                      <Link to="/weddingplan" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>WEDDING PLANNING</a></li></Link>
                      <Link to="/prom" style={{ textDecoration: "none" }}><li><a className="dropdown-item" href="" onClick={()=>{window.scroll(0,0)}}>PROM TRANSPORTATION</a></li></Link>
                      {/* <li><a className="dropdown-item" href="#">WINERY TOURS + TASTINGS</a></li> */}


                    </ul>
                  </li>

                  {/* <li className="nav-item">
          <a className="nav-link text-a" href="#">FLEET</a>
        </li> */}
                  <li className="nav-item">
                    <Link to="/account" style={{ textDecoration: "none" }}><a className={color == "account" ? "nav-link text-a-active" : "nav-link text-a"} href="" id="account" onClick={()=>{setColor("account")
                  window.scroll(0,0)
                  }}>ACCOUNTS</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" style={{ textDecoration: "none" }}><a className={color == "contact" ? "nav-link text-a-active" : "nav-link text-a"} href="" id="contact" onClick={()=>{setColor("contact")
                  window.scroll(0,0)
                  }}>CONTACT</a></Link>
                  </li>
                  <li>
                    <button className='btn btn-make'>Make A Reservation</button>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        ) : (
          <></>
        )
      }



      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">FAQ'S</a></li>
                                <li><a class="dropdown-item" href="#">TESTIMONIALS</a></li>
                                <li><a class="dropdown-item" href="#">BLOG</a></li>
                            </ul>
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">FAQ'S</a></li>
                                <li><a class="dropdown-item" href="#">TESTIMONIALS</a></li>
                                <li><a class="dropdown-item" href="#">BLOG</a></li>
                            </ul>



                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
    </div>
  )
}

export default Navbars