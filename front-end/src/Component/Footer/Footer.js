import React from 'react'
import "./Footer.css"
import logo from "../../Assets/cropped-Urban-Wht-logo-300x79-1.png"
import { FaMapMarkerAlt, FaCommentDots } from "react-icons/fa"
import { MdAddIcCall, MdEmail } from "react-icons/md"
function Footer({state}) {
    return (
        <div className='footer-back ' >

            {state ? (
                <div>
                    <div className='container' >
                <div className='row d-flex justify-content-center pt-5 pb-5' >
                    <div className='col-lg-3 col-11 pt-4' >
                        <img src={logo} width="200px" /><br />
                        <div className='family-span pt-4' >As a family-owned business, we provide a personalized white glove approach to private executive and leisure transportation. Currently driving in over 700 cities worldwide, with offices in San Francisco,  Los Angeles, and Hawaii. </div>
                        <div class="social-container" >
                            <ul class="social-icons" >
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-2 col-11 pt-4' >
                        <h5 className='text-start ps-4' >Links</h5>
                        <ul >
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Fleet</li>
                            <li>Account Access</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-11 pt-4' >
                        <h5 className='text-start ps-4' >More Info</h5>
                        <ul >
                            <li>Locations</li>
                            <li>Testimonials</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-11 pt-4 text-start'  >
                        <h5 className='text-start ps-4'>Get In Touch</h5>
                        <ul>
                            <li><FaMapMarkerAlt color='#ed7966' /> &nbsp;1162 San Mateo Ave., South San Francisco</li>
                            <li><MdAddIcCall color='#ed7966' /> &nbsp;+1 415 494 8122</li>
                            <li><FaCommentDots color='#ed7966' /> &nbsp;+1 877 277 0208 (Text Enabled)</li>
                            <li><MdEmail color='#ed7966' /> &nbsp;Message Us</li>
                        </ul>
                        <h5 className='ps-4 Join-h5' >Join Our Mailing List</h5>
                        <p className='text-end indicates-p' >* indicates required</p>

                        <div class="mb-3" >
                            <label for="exampleInputEmail1" class="form-label" >Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Enter Email' aria-describedby="emailHelp" />
                        </div>
                        <button className='btn btn-Subscribe mb-3' >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='row col-12 ' style={{ borderTop: "1px solid gray", width: "99.5vw" }}>
                <div className='col-12 d-flex justify-content-center justify-content-around pt-3 pb-3' >
                    <span id='last-span'>© 2022 Urban Worldwide All Rights Reserved</span>
                    <span id='last-span'>Made with ❤ by LimoPartner.com</span>

                </div>
            </div>
                </div>
            ):(
                <>
                </>
            )
            
            }
           
        </div>
    )
}

export default Footer