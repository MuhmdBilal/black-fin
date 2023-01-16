import React from 'react'
import Slickimagr from '../Slick/Slickimagr'
import {FaMicrophoneAlt,FaFootballBall,FaHeart,FaGlassCheers,FaUserGraduate,FaUsers} from "react-icons/fa"
import { AiOutlineClockCircle, AiFillCar } from "react-icons/ai"
import corporatetravelthumb from "../../Assets/leisure-experiences-img2.webp"
import corporatetravelimg from "../../Assets/leisure-experiences-img3.webp"
function PromTransportation() {
  return (
    <div>
        <div className='backgroundiamge-prom'>
        <div className='back-color-one'>
            <div className='col-md-12'>
                <div>
                    <h4 className='FRANCISCO-h4'>PROM LIMOUSINE AND COACH BUS RENTALS</h4>

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
                <h2 className='CORPORATE-h2'>SAFE AND RELIABLE TRANSPORTATION FOR THEIR SPECIAL NIGHT.</h2>
                <p className='Based-p mt-3'><strong>THIS IS A TIME FOR YOUR YOUNG PEOPLE TO CELEBRATE, STAND OUT, AND BE RECOGNIZED FOR WHAT THEY’VE ACCOMPLISHED. A BEAUTIFUL LUXURY LIMOUSINE WITH A PROFESSIONAL CHAUFFEUR IS THE PERFECT WAY TO HELP CELEBRATE THEM.</strong></p>
                <p className='Based-p mt-3'>Let your children have an evening to remember while you rest at ease knowing that they will arrive safe and sound. One of the biggest nights of the year for most seniors is their prom night. You want to make the most fabulous impression on your high school class. There is no better way to celebrate this most important night than with a sleek, black, stretch limousine. Our prom packages are a terrific value. You can rest assured that our professional drivers will ensure you are returned safely and securely at the night’s end.</p>
                <p className='Based-p mt-3'>When we look back on our school years, we will always cherish the memories of our dances. From Homecoming to Prom, we can get you there in STYLE. From large groups to just a sweet couple of kids, we can get you there and back in luxury and safety.</p>
                <p className='Based-p mt-3'><strong>Make sure they arrive in complete VIP style with prom transportation from Black Fin. With the elegance and style our limousines bring, they’ll be the talk of the party!</strong></p>
                <div className=''>
                    <h2 className='Service-h3'>The Black Fin Luxury Chauffeur Service Experience:</h2>
                    <ul>
                        <li className='mt-3'><FaMicrophoneAlt size={20} /> Concerts, theater, and entertainment venues</li>
                        <li className='mt-2'><AiFillCar size={20} /> VIP transportation</li>
                        <li className='mt-2'><FaFootballBall size={20} /> Sporting events</li>
                        <li className='mt-2'><FaHeart size={20} /> Weddings</li>
                        <li className='mt-2'><FaGlassCheers size={20} /> Bachelor and Bachelorette parties</li>
                        <li className='mt-2'><FaUserGraduate size={20} /> Proms and Graduations</li>
                        <li className='mt-2'><FaUsers size={20} /> Family reunions and outings</li>
                        
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
                    {/* <img src={corporatetravelthumb} className="img-fluid mt-2 mb-5" width="350px"/> */}
                    <img src={corporatetravelimg} className="img-fluid border mb-3 mt-4" width="350px"/>

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

export default PromTransportation