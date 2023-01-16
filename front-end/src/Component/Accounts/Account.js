import React from 'react'
import "./Account.css"
import urban from "../../Assets/urban-worldwide-account-access.webp"
import accountaccess from "../../Assets/account-access-3.webp"
import Slickimagr from '../Slick/Slickimagr'
import { BiLogIn } from "react-icons/bi"
import {TbLogin} from "react-icons/tb"
import Accordions from '../Accordion/Accordion'
function Account() {
    return (
        <div>
            <div className='backgroundiamge-account'>
            <div className='back-color-one'>
                <div className='col-md-12'>
                    <div> <h2 className='ACCOUNT-h2'>ACCOUNT ACCESS</h2></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                        <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                        <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                    </svg>
                </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-md-5 col-11 '>
                        <div ></div>
                        <h4 className='WELCOME-h4'>WELCOME TO Black Fin, WE’RE SO HAPPY YOU’RE HERE.</h4>
                        <p className='Ourp'>Our account access portal keeps all your relevant information in one place. Log in to make new reservations, review current or past bookings, and obtain your receipts and invoices.</p>
                        <p className='Ourp text-start'><span className='pleasure-span'>Business or pleasure</span>, your ride is here. Let’s make it as easy as possible to get where you’re going.</p>
                        <p className='OurpIf'>If you’re visiting for the first time, setting up a profile is easy via our online system. Simply click the “Log In” option in the top right-hand corner of the form below, and select “Register Now” under the email entry box.</p>
                        <p className='Ourp'>Questions or concerns about your account access? Feel free to call or text +1 415 494 8122 or email us at info@urbanworldwide.com. We’re always ready to help, 24 hours a day.</p>
                    </div>
                    <div className='col-md-5 col-11  pt-2 pb-2'>
                        <img src={urban} className="img-fluid" height="700px"/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-10 pt-2 pb-2' style={{ backgroundColor: "#f5cac2" }}>
                        <span id="website-span">This website uses cookies to ensure you get the best experience on our website.Privacy Policy</span>
                        &nbsp;&nbsp;<button className='btn btn-got'>Got it!</button>
                    </div>
                    <div className='col-10 pt-2 pb-2' style={{ backgroundColor: "#F8F8F8" }}>
                        <div lassName='row d-flex justify-content-center '>
                            <div className='col-12 d-flex justify-content-between '>
                                <span className='Reservation-span'><BiLogIn size={23}/>  New Reservation</span>
                                <span className='Reservation-span'><TbLogin size={23} />  Log In</span>
                            </div>
                            <div className='col-12'>
                                <Accordions/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-md-10 col-11'>
                        <img src={accountaccess} className="img-fluid" />
                    </div>
                    <div className='col-md-10 col-11'>
                        <h5 className='Whether-h5'>Whether you’re enjoying our luxury ground transportation services, or taking to the skies with our private aviation chapter, Black Fin, we look forward to traveling with you.</h5>
                        <p className='Ourp text-start'>We are proud to offer customizable transportation packages, as well as the promise to build familiar working relationships with our frequent clients – we’ll learn what you like, and make sure it happens for you every time! Our chauffeurs and reservations team are always striving to operate as an extension of your business, fitting seamlessly into your life and your travel plans.</p>
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

export default Account
// 3rd d="M2600 0L0 0 0 130.1 2600 69.1z"
// 2nd d="M0 0L2600 0 2600 69.1 0 69.1z"
// 1st d="M0 0L2600 0 2600 69.1 0 0z"