import React from 'react'
import UrbanBl from "../../Assets/Urban-Blk-logo-300x79-1.webp"
import { FaMapMarkerAlt, FaCommentDots, FaCoins } from "react-icons/fa"
import { MdAddIcCall, MdEmail } from "react-icons/md"
import { BiBuildings } from "react-icons/bi";
import ContactUs from "../../Assets/Contact-Us.jpg.webp"
import UrbanDave from "../../Assets/Urban-Dave.webp"
import { BsYoutube } from "react-icons/bs"
import Slickimagr from '../Slick/Slickimagr'
import "./Contact.css"
function Contact() {
    return (
        <div>

            <div className='backgroundiamge-faqs'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div> <h2 className='ACCOUNT-h2'>CONTACT US</h2></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                            <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                            <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row d-flex justify-content-center justify-content-around'>
                    <div className='col-lg-4 text-start mt-5'>
                        <img src={UrbanBl} />
                        <ul>
                            <li style={{ fontSize: "20px", paddingTop: "15px" }}><FaMapMarkerAlt color='#303179' /> &nbsp;1162 San Mateo Ave.</li>
                            <li style={{ fontSize: "20px", paddingTop: "13px" }}><BiBuildings color='#303179    ' /> &nbsp;South San Francisco, CA 94080</li>

                            <li style={{ fontSize: "20px", paddingTop: "13px" }}><MdAddIcCall color='#303179    ' /> &nbsp;+1 415 494 8122</li>
                            <li style={{ fontSize: "20px", paddingTop: "13px" }}><FaCommentDots color='#303179  ' /> &nbsp;+1 877 277 0208 (Text Enabled)</li>
                            <li style={{ fontSize: "20px", paddingTop: "13px" }}><MdEmail color='#303179    ' /> &nbsp;info@urbanworldwide.com</li>
                            <li style={{ fontSize: "20px", paddingTop: "13px" }}><FaCoins color='#303179    ' /> &nbsp;TCP 24969B & TCP 34959B</li>
                        </ul>
                        <div>
                            <h5 className='URBAN-h5'>Black Fin LA</h5>
                            <h6 className='URBAN-h5'>(Formerly Rio Chauffeured Services)</h6>
                            <ul>
                                <li style={{ fontSize: "20px", paddingTop: "15px" }}><FaMapMarkerAlt color='#303179 ' /> &nbsp;1227 S La Brea Ave</li>
                                <li style={{ fontSize: "20px", paddingTop: "13px" }}><BiBuildings color='#303179    ' /> &nbsp;Inglewood, CA 90301</li>
                                <li style={{ fontSize: "20px", paddingTop: "13px" }}><MdAddIcCall color='#303179    ' /> &nbsp;+1 310 203 2645</li>

                            </ul>
                        </div>
                        <div>
                            <h5 className='URBAN-h5'>HAWAII</h5>
                            <h6 className='URBAN-h5'>(Formerly Luxury Hawaii Transportation)</h6>
                            <ul>
                                <li style={{ fontSize: "20px", paddingTop: "15px" }}><FaMapMarkerAlt color='#303179 ' /> &nbsp;1110 Nuuanu Ave #A1-504</li>
                                <li style={{ fontSize: "20px", paddingTop: "13px" }}><BiBuildings color='#303179    ' /> &nbsp;Honolulu, HI 96817</li>
                                <li style={{ fontSize: "20px", paddingTop: "13px" }}><MdAddIcCall color='#303179    ' /> &nbsp;+1 808 460 4200</li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-5 mt-5'>
                        <h4 style={{ color: "#303179" }}>CONNECT WITH US</h4>
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
                        <div className='mt-5 mb-5'>
                            <img src={ContactUs} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#f5cac2" }}>
                <div className='container'>
                    <div className='row d-flex justify-content-center text-center mt-5 pb-5'>
                        <div className='col-lg-10'>
                            <h2 className='Available-h2 mt-5'>We’re Here And Available To Connect.</h2>
                            <p className='Based-p mt-5'>Contact us any time, from anywhere. Unsure which vehicle is your preference, or which trip type makes the most sense for your needs? No problem! We can always adjust these details later, so don’t stress as you complete the form (though the more information, the better!) Whether you’re booking for business or pleasure, our team is ready to accommodate in whatever ways we can, with the extra care you won’t find anywhere else. </p>
                            <p className='Based-p mt-3'>And of course, feel free to <strong>call or text +1 877 277 0208</strong> to speak with someone from our team directly, 24 hours a day. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className='container'>
                    <div className='row d-flex justify-content-center text-center mt-5 pb-5'>
                        <div className='col-12 mt-4'>
                            <h3 className='message-h3 mt-5'>A Message From Dave Uziel, Owner And CEO</h3>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <img src={UrbanDave} className="img-fluid image-w" />
                        </div>
                        <div className='col-lg-8 text-start mt-5 mb-5'>
                            <p className='Whether-p'>Whether this is your first or fifty-first ride, thank you for choosing Black Fin. This company is a direct reflection of how I move through my life, meaning that we value authenticity, transparency and trust, and we’re committed to exceeding expectations on all levels. I maintain an open-door policy, and I always want to hear from you if there’s ever anything you’d like to discuss.</p>
                            <p className='Whether-p'>Reach out to me at dave@urbanworldwide.com, or on my cell at +1 (650) 826-0887.</p>
                            <p className='Whether-p'>Podcast: The Blind Spot with Dave Uziel</p>
                            <div className='youtube-box'>
                                <BsYoutube size={25} />
                            </div>
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

export default Contact