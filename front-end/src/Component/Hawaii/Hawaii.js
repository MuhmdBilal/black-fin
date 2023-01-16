import React from 'react'
import TariqBlack from "../../Assets/Tariq-Black-logo-1024x222.webp"
import Honolulu from "../../Assets/Honolulu.webp"
import Slickimagr from '../Slick/Slickimagr'

import "./Hawaii.css"
import { Link } from 'react-router-dom'
function Hawaii() {
    return (
        <div>

            <div className='backgroundiamge-hawaii'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div >
                            <h4 className='FRANCISCO-h4'>HAWAII CAR SERVICE</h4>
                            <Link to="/makereservation"><button className='btn btn-view-fleet'>MAKE A RESERVATION</button></Link>

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
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-7 mt-5'>
                        <h5><img src={TariqBlack} className='img-fluid' width="150px" />  Luxury Hawaii Transportation is now Black Fin Worldwide</h5>
                        <h2 className='provides-h2'>Black Fin Worldwide is your go-to travel partner for all Hawaii transportation needs.</h2>
                        <p className='Based-p mt-3'>Based in Honolulu, our team has been providing luxury black car service on Oahu, throughout Hawaii, and beyond for years. As a result, we have become one of Hawaii’s most trusted businesses.</p>
                        <p className='Based-p mt-1'>We believe in the simple premise of treating our clients the same way we would like to be treated when we travel. We work extremely hard to build your trust in us and create meaningful relationships with clients that extend well beyond the time spent here in the Aloha State.</p>
                        <p className='Based-p '>We provide clients with the most discreet and reliable chauffeured car experience throughout Hawaii. When you chose to travel with us, you will quickly understand why.</p>
                    </div>
                    <div className='col-lg-5 mt-5'>
                        {/* <h4 style={{ color: "#005cb9" }}>CONNECT WITH US</h4> */}
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

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-lg-7  text-md-start mb-5'>
                        <img src={Honolulu} className='img-fluid' width="" />
                    </div>
                    <div className='col-lg-5 mb-5'>
                        <h2 className='EXPLORE-h2'>EXPLORE OUR HAWAII CAR<br /> SERVICES:</h2>
                        <div className="tab">
                            <input type="checkbox" id="chck1" className='inputtav' />
                            <label className="tab-label" for="chck1">One Way Transfers</label>
                            <div className="tab-content text-start">
                                <p>A simple solution that gets you from one point to another.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" className='inputtav' />
                            <label className="tab-label" for="chck2">By The Hour</label>
                            <div className="tab-content text-start">
                                <p>For times where you need a luxury vehicle and a professional chauffeur at your beck and call. Go where you want to go, when you want to go.</p>

                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck3" />
                            <label className="tab-label" for="chck3">Inter-Island Travel</label>
                            <div className="tab-content text-start">
                                <p>Island hopping? We have long-standing partners on Maui, Kauai, the Big Island of Hawaii, as well as Lanai. Experience the same level of service throughout the islands without taking additional time away from your busy (or relaxed) lifestyle.</p>

                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck4" />
                            <label className="tab-label" for="chck4">HNL Airport Transportation</label>
                            <div className="tab-content text-start">
                                <p>We provide exceptional airport black car and limo services to and from (HNL) Daniel K. Inouye International Airport for those times when you cannot afford to settle for anything short of the best.</p>
                            </div>
                        </div>

                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck5" />
                            <label className="tab-label" for="chck5">Cruise Terminal Transportation</label>
                            <div className="tab-content text-start">
                                <p>If you are arriving or departing via Cruise, we make the experience effortless. We provide round-trip, as well as one-way services from the Pier 2 Cruise Terminal and the Pier 11 Cruise Ship Terminal. Our chauffeurs deliver top-notch service, relieving all travel-related stresses.</p>
                            </div>
                        </div>


                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck6" />
                            <label className="tab-label" for="chck6">Corporate Transportation</label>
                            <div className="tab-content text-start">
                                <p>Whether you are planning ground travel for a board meeting, corporate event, or an airport transfer, Black Fin Worldwide offers unmatched corporate transportation solutions on Oahu, throughout Hawaii, and beyond.</p>
                            </div>
                        </div>

                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck7" />
                            <label className="tab-label" for="chck7">Convention Transportation</label>
                            <div className="tab-content text-start">
                                <p>We are experts in providing group transportation on Oahu and throughout Hawaii. We have extensive knowledge of the Hawaii Convention Center, as well as the surrounding hotels and event venues. We specialize in airport transfers and corporate events. For all of your group transportation needs, you can count on us to provide reliable executive chauffeured transportation service to exceed all of your specific group needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <button className='btn btn-view-fleet'>View Your Fleet</button>
                    </div>
                    <div className='col-lg-12 text-center mt-5'>
                        <h2 className='provides-h2 text-center'>Interested in a luxury tour on Oahu?</h2>
                        <p className='Based-p mt-3 text-center fs-5'>Search, discover, and explore Oahu with one-of-a-kind private Oahu tours with our sister company, <span style={{ color: "#c36" }}> Luxury Hawaii Tours</span>. Guaranteed to leave lasting impressions, you can experience historic Honolulu, visit Iolani Palace, Haleiwa Town, and Oahu’s famous north shore beaches, as well as touring the Dole Pineapple Plantation, and more!</p>

                        <div className="row d-flex justify-content-center justify-content-around mt-5 mb-5">
                            <div className='col-lg-3'>
                                <div class="card-iamge">
                                    <div class="imgBx">
                                        <img src="https://w0.peakpx.com/wallpaper/834/205/HD-wallpaper-waikiki-honolulu-morning-sunrise-ocean-coast-hawaii-usa-honolulu-cityscape.jpg" alt="images" />
                                    </div>
                                    <div class="details">
                                        <h2>WAIKIKI<br /><span>VIEW TOURS FROM WAIKIKI</span></h2>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3'>
                                <div class="card-iamge">
                                    <div class="imgBx">
                                        <img src="https://toppng.com/uploads/preview/hawaii-oahu-waikiki-wallpaper-11555148943rpllbvhmef.jpg" alt="images" />
                                    </div>
                                    <div class="details">
                                        <h2>KO'OLINA<br /><span>VIEW TOURS FROM KO'OLINA</span></h2>
                                    </div>
                                </div>
                            </div>



                            <div className='col-lg-3'>
                                <div class="card-iamge">
                                    <div class="imgBx">
                                        <img src="https://media.istockphoto.com/id/1038532990/photo/diamond-head-state-park-aerial.jpg?b=1&s=170667a&w=0&k=20&c=CAmBi7vD1AYX_AjOL8Tk56UI0yKkBM0hW-2iXdfb0sw=" alt="images" />
                                    </div>
                                    <div class="details">
                                        <h2>NORTH SHORE<br /><span>VIEW TOURS FROM THE NORTH SHORE</span></h2>
                                    </div>
                                </div>
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

export default Hawaii