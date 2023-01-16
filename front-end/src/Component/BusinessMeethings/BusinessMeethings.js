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
function BusinessMeethings() {
  return (
    <div>
    <div className='backgroundiamge-businesservices'>
        <div className='back-color-one'>
            <div className='col-md-12'>
                <div>
                    <h4 className='FRANCISCO-h4'>EXECUTIVE CAR SERVICE</h4>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                    <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                    <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                </svg>
            </div>
        </div>
    </div>


    <div className='container'>
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-lg-8 mt-5'>
                <h2 className='CORPORATE-h2'>COORDINATE CORPORATE ROADSHOWS, MEETING AND EVENT TRANSPORTATION WITH Black Fin.</h2>
                <p className='Based-p mt-3'><strong>IF YOU ARE SEEKING A PROFESSIONAL CAR SERVICE SPECIALIZING IN CORPORATE ROADSHOWS AND GROUP TRANSPORTATION FOR MEETINGS AND EVENTS, LOOK NO FURTHER THAN Black Fin.</strong></p>
                <p className='Based-p mt-3'>We provide a full assistance solution, and our drivers are versed in the corporate etiquette required to keep your company looking at its ideal.</p>
                <p className='Based-p mt-3'>Company roadshow services vary from customer to customer. Sometimes, a roadshow entails picking up an appreciated client or corporate executive on the flight terminal’s tarmac and pleasantly delivering them to their essential conference uncreative. Other times, it means carrying business execs to numerous different meetings throughout the day.</p>
                <p className='Based-p mt-3'>While the schedule of roadshows might vary, there is one thing that needs to correspond, whatever: The quality of customer care. Your limo solution must always have a contingency plan gotten ready for last-minute changes in the program. They ought to have all the destinations pre-programmed right into their navigating system, and they need never to fall short to follow firm procedures.</p>
                <p className='Based-p mt-3'>Black Fin is familiar with the logistics of roadshow planning that numerous corporations undertake throughout the year. We service many such organizations within the province and nationally and internationally through our strong affiliate network connections and as members of the International Affiliate Network.</p>
                <p className='Based-p mt-3'><strong>Our business transportation services are the perfect solution for your associates when it comes to corporate roadshows, convention travel, meetings, and much more.</strong></p>
                <div className=''>
                    <h2 className='Service-h3'>The Black Fin Worldwide Executive Car Service Experience:</h2>
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
                <div>
                    <img src={corporatetravelimg} className="img-fluid mt-2" width="350px"/>
                    <img src={corporatetravelthumb} className="img-fluid mt-2 mb-5" width="350px"/>

                </div>
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

export default BusinessMeethings