import React from 'react'
import "./Testimonial.css"
import UrbanDave from "../../Assets/Urban-Dave.webp"
import { BsYoutube } from "react-icons/bs"
import Slickimagr from '../Slick/Slickimagr'

function Testimonial() {
    return (
        <div>
            <div className='backgroundiamge-testimonials'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div> <h2 className='ACCOUNT-h2'>WHAT PEOPLE ARE SAYING</h2></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                            <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                            <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center text-center mt-5'>
                    <div className='col-lg-11 col-11 testmonial-text '>
                        <div className='row d-flex justify-content-center text-center'>
                            <div className='col-11  text-super pt-4'>“Super professional, prompt and courteous service. They have also helped me out of a few jams where another limo service cancelled on us last second. I would highly recommend them. Wouldn’t use anyone else.”</div>
                            <div className='mt-4 mb-2'>
                                <span id="Kirk" >Kirk C.</span><br />
                                <span id="Oakland">Oakland, CA</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-11 col-11 testmonial-text '>
                        <div className='row d-flex justify-content-center text-center'>
                            <div className='col-11  text-super pt-4'>“UrbanBCN is amazing. No matter what my travel needs are they have me covered. Never an issue and great customer service. Just flew into NY and it was an easy and fast transfer to my hotel. Would definitely recommend them to friends and family.”</div>
                            <div className='mt-4 mb-2'>
                                <span id="Kirk" >Eddie P.</span><br />
                                <span id="Oakland">South San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-11 col-11 testmonial-text '>
                        <div className='row d-flex justify-content-center text-center'>
                            <div className='col-11  text-super pt-4'>“Our driver Stephen was awesome! Very professional and knowledgeable of traffic situations. He was early for the pick up at 6:15 AM and early for the pick up home. Will use this service again.”</div>
                            <div className='mt-4 mb-2'>
                                <span id="Kirk" >Debbie G.</span><br />
                                <span id="Oakland">Milpitas, CA</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-11 col-11 testmonial-text '>
                        <div className='row d-flex justify-content-center text-center'>
                            <div className='col-11  text-super pt-4'>“Excellent service! Prompt, professional and knowledgable. I use many driving services in my travels around the globe, but yesterday was my first experience with UrbanBCN. I was impressed with the seamless travel experience provided by the driver and the company behind him.”</div>
                            <div className='mt-4 mb-2'>
                                <span id="Kirk" >Dan D.</span><br />
                                <span id="Oakland">Stanford, CA</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-11 col-11 testmonial-text '>
                        <div className='row d-flex justify-content-center text-center'>
                            <div className='col-11  text-super pt-4'>“Great company, always my choice when I’m in San Fran! The chauffeurs are always on time, courteous, and professional. Definitely recommend using UrbanBCN for all your chauffeured transportation needs in and out of SF!”</div>
                            <div className='mt-4 mb-2'>
                                <span id="Kirk" >Robyn G.</span><br />
                                <span id="Oakland">Chappaqua, NY</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-11 col-11 Reviews-text mb-5 mt-4'>
                        View All Reviews Or Leave Your Own!
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#f5cac2" }}>
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

export default Testimonial