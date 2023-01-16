import React from 'react'
import Slickimagr from '../Slick/Slickimagr'
import weddingplanningthumb from "../../Assets/wedding-planning-thumb.webp"
import WeddingRing from "../../Assets/Wedding-Ring.webp"
import weddingplanningimg3 from "../../Assets/wedding-planning-img3.webp"
import FemaleCouple from "../../Assets/Female-Couple.webp"
import {FaMicrophoneAlt,FaFootballBall,FaHeart,FaGlassCheers,FaUserGraduate,FaUsers} from "react-icons/fa"
import { AiOutlineClockCircle, AiFillCar } from "react-icons/ai"
function WeddingPlan() {
    return (
        <div>
            <div className='backgroundiamge-wedding'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div>
                            <h4 className='FRANCISCO-h4'>WORK WITH A PERSONALIZED Black Fin</h4>
                            <h2 className='ACCOUNT-h2'>WEDDING PLANNER</h2>

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
                    <div className='col-lg-7 mt-5'>
                        <h2 className='CORPORATE-h2'>A DAY TO REMEMBER, FOREVER</h2>
                        <p className='Based-p mt-3'>Your wedding happens once, and a lot of things need to culminate in the same moment to create your perfect experience. At Urban Worldwide we understand the responsibility of participating in your special day, and will always strive to provide the most attentive and professional wedding car service possible to accommodate your transportation needs.</p>
                        <p className='Based-p mt-3'>With over <span style={{ color: "#c36" }}>40 years of experience</span>, our team is versed in the intricacies of wedding planning, and we are ready to meet you with full support and handle whatever comes our way. Trust us to manage the logistics while you focus on making memories with your friends and loved ones! We’re committed to being your partners in joy, and excellence, for the duration of our agreement, and we’re always grateful for the opportunity to celebrate with you.</p>
                        <p className='Based-p mt-3'>Ready to get started? All inquiries can be directed to our in-house wedding specialist, who is available to answer any and all questions as you begin your wedding journey with us. Please fill out the form below, or you can reach us directly by calling +1 415 494 8122 or emailing <span style={{ color: "#c36" }}>weddings@urbanworldwide.com</span>.</p>
                        <p className='Based-p mt-3'>Ask us about booking a free 60 minute consultation!</p>
                    </div>
                    <div className='col-lg-5 mt-5'>
                        <h4 style={{ color: "#005cb9" }}>YOUR DAY, YOUR WAY</h4>
                        <div className='row d-flex justify-content-center'>

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
                                    <input type="number" className="form-control" placeholder='Phone Number' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div className="mb-3 text-start">
                                    <input type="date" className="form-control" placeholder='pick up date' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>

                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10'>
                                <div className="mb-3 text-start">
                                    <input type="text" className="form-control" placeholder='Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 text-start'>
                                <label className='mb-2'><strong>What type of project are you looking for?</strong></label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select an option </option>
                                    <option value="1">Birthday</option>
                                    <option value="2">Corporate </option>
                                    <option value="3">Design </option>
                                    <option value="3">Family </option>
                                    <option value="3">Party  </option>
                                    <option value="3">Wedding  </option>
                                    <option value="3">Wedding Transportation</option>
                                    <option value="3">Other  </option>

                                </select>
                            </div>
                            <div className='col-lg-10 text-start mt-2'>
                                <label className='mb-2'><strong>How did you here about us?</strong></label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select an option </option>
                                    <option value="1">Personal Website </option>
                                    <option value="2">Google </option>
                                    <option value="3">Facebook </option>
                                    <option value="3">Instagram </option>
                                    <option value="3">Mercedes Sprinter </option>
                                    <option value="3">Yelp </option>
                                    <option value="3">Thumbtack  </option>
                                    <option value="3">TikTok </option>
                                    <option value="3">TheKnot  </option>
                                    <option value="3">Wedding Wire  </option>
                                    <option value="3">Urbanworldwide.com  </option>
                                    <option value="3">Vendor Referral  </option>
                                    <option value="3">Client Referral  </option>
                                </select>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 mt-3'>
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Tell me ore about this project' rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-10 mt-2'>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-SEND" type="button">Send</button>

                                </div>

                            </div>
                        </div>
                        <div>
                            {/* <img src={corporatetravelthumb} className="img-fluid mt-2 mb-5" width="350px"/> */}
                            {/* <img src={corporatetravelimg} className="img-fluid border mb-3 mt-4" width="350px"/> */}

                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-lg-4'>
                        <img src={weddingplanningthumb} className="img-fluid" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={WeddingRing} className="img-fluid" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={weddingplanningimg3} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-lg-7'>
                    <h2 className='Service-h3'>The Black Fin Wedding Experience:</h2>
                    <ul>
                        <li className='mt-3'><FaMicrophoneAlt size={20} /> Personalization and special requests</li>
                        <li className='mt-2'><AiFillCar size={20} /> VIP transportation</li>
                        <li className='mt-2'><FaFootballBall size={20} /> Multi-destination options</li>
                        <li className='mt-2'><FaHeart size={20} /> Bride and Groom packages</li>
                        <li className='mt-2'><FaGlassCheers size={20} /> Bachelor and Bachelorette parties</li>
                        {/* <li className='mt-2'><FaUserGraduate size={20} /> Proms and Graduations</li> */}
                        <li className='mt-2'><FaUsers size={20} /> Groups of any size</li>
                        
                    </ul>
                    </div>
                    
                    <div className='col-lg-5'>
                        <img src={FemaleCouple} className="img-fluid" />
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

export default WeddingPlan