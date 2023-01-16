import React from 'react'
import Slickimagr from '../Slick/Slickimagr'
// import "./ExecutiveCarService.css"
import { Link } from "react-router-dom"
import { BiWorld, BiMoney } from "react-icons/bi"
import { AiOutlineClockCircle, AiFillCar } from "react-icons/ai"
import { FaUsersCog } from "react-icons/fa"
import { FaEnvelope, FaRegIdCard, FaUserTie, FaAward, FaPlane } from "react-icons/fa"
import { GoDeviceMobile } from "react-icons/go";
import corporatetravelthumb from "../../Assets/corporate-travel-thumb.webp"
import corporatetravelimg from "../../Assets/corporate-travel-img-2.webp"
import {RxDotFilled} from "react-icons/rx"
function PointToPoint() {
  return (
    <div>
            <div className='backgroundiamge-pointtopoint'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div>
                            <h4 className='FRANCISCO-h4'>POINT-TO-POINT + HOURLY SERVICE</h4>

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                            <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                            <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>


            <div className='container mb-5'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-lg-8 mt-5'>
                        <h2 className='CORPORATE-h2'>POINT-TO-POINT SERVICES IN CALIFORNIA, HAWAII, AND AROUND THE WORLD.</h2>
                        <p className='Based-p mt-3'>Whether you’re eager to explore a new city, dive into <span style={{ textDecoration: "none", color: "#c36" }}>California’s wine tasting regions</span>, or discover the best sights Hawaii has to offer, our point-to-point transportation services are always designed just for you. Personalized to your preferences and with the option to customize your trip in a variety of ways, booking hourly chauffeur service with us will guarantee exactly the experience you were hoping for, and more.</p>
                        <p className='Based-p mt-3'>Our drivers will transport you to all the various points of interest you’d like to visit, on your schedule and with the ability to adjust at any time. Point-to-point or hourly services are ideal for:</p>

                        <ul>
                            <li><RxDotFilled/> Sight-seeing</li>
                            <li><RxDotFilled/> Shopping</li>
                            <li><RxDotFilled/> Restaurants</li>
                            <li><RxDotFilled/> Bar-hopping</li>
                            <li><RxDotFilled/> Nights out </li>

                        </ul>
                        <div className=''>
                            <h2 className='Service-h3'>The Black Fin Point-To-Point Experience:</h2>
                            <ul>
                                <li className='mt-3'><BiWorld size={20} /> Over 715 cities serviced worldwide</li>
                                <li className='mt-2'><AiOutlineClockCircle size={20} /> Customer Service Support 24-hours a day, 365 days a year</li>
                                <li className='mt-2'><FaUsersCog size={20} /> Seamless integration with your travel management company / travel agency systems</li>
                                <li className='mt-2'><AiFillCar size={20} /> Extensive fleet of vehicles</li>
                                <li className='mt-2'><BiMoney size={20} /> All-inclusive rates, including taxes, fuel surcharges and gratuity with no hidden fees</li>
                                <li className='mt-2'><FaEnvelope size={20} /> Instant email confirmations with reservations</li>
                                <li className='mt-2'><FaRegIdCard size={20} /> One-hour alerts, with chauffeur name and cell phone number</li>
                                <li className='mt-2'><FaUserTie size={20} /> Highly trained and experienced chauffeurs</li>
                                <li className='mt-2'><FaAward size={20} /> Professionalism and discretion</li>
                                <li className='mt-2'><GoDeviceMobile size={20} /> GPS tracking in all company vehicles</li>
                                <li className='mt-2'><FaPlane size={20} /> Flight tracking for prompt airport transfers</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        {/* <h4 style={{ color: "#005cb9" }}>CONNECT WITH US</h4> */}
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 mt-3'>
                                <div className="d-grid gap-2">
                                    <button  className='btn btn-view-fleet' size="lg">
                                        Book Now
                                    </button>

                                </div>
                            </div>
                            <div className='col-lg-10 mt-3 mb-3'>
                                <div className="d-grid gap-2">
                                    <button  className='btn btn-view-fleet' size="lg">
                                        VIEW OUR FLEET
                                    </button>

                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div className="mb-3 text-start">
                                    <input type="text" className="form-control" placeholder='Full Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div className="mb-3 text-start">
                                    <input type="text" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-5'>
                                <div className="mb-3 text-start">
                                    <input type="date" className="form-control" placeholder='pick up date' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div className="mb-3 text-start">
                                    <input type="number" className="form-control" placeholder='# of Passenge' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-5'>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Trip Type</option>
                                    <option value="1">Per Hour</option>
                                    <option value="2">Per Day</option>
                                    <option value="3">Airport Transfer</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                            <div className='col-lg-5'>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Vehicle Type </option>
                                    <option value="1">Executive Sedan </option>
                                    <option value="2">Executive SUV </option>
                                    <option value="3">Luxury Sedan </option>
                                    <option value="3">Executive Mini Coaches </option>
                                    <option value="3">Mercedes Sprinter </option>
                                    <option value="3">Shuttle Bus </option>
                                    <option value="3">Limousine </option>
                                    <option value="3">SUV Limousine </option>
                                </select>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 mt-3'>
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Give Us Details' rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 mt-2'>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-SEND" type="button">SEND MESSAGE</button>

                                </div>

                            </div>
                        </div>
                        {/* <div>
                            <img src={corporatetravelimg} className="img-fluid mt-2" width="350px"/>
                            <img src={corporatetravelthumb} className="img-fluid mt-2 mb-5" width="350px"/>

                        </div> */}
                    </div>
                </div>
            </div>

            <div className='home-bottom'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 pt-4 pb-4'>
                            <Slickimagr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PointToPoint