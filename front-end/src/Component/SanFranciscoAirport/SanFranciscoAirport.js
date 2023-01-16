import React from 'react'
import Slickimagr from '../Slick/Slickimagr'
import urbanairporttransfers from "../../Assets/urban-airport-transfers.webp";
import { BiWorld, BiMoney } from "react-icons/bi"
import { AiOutlineClockCircle, AiFillCar } from "react-icons/ai"
import { FaUsersCog } from "react-icons/fa"
import { FaEnvelope, FaRegIdCard, FaUserTie, FaAward, FaPlane } from "react-icons/fa"
import { GoDeviceMobile } from "react-icons/go";

function SanFranciscoAirport() {
    return (
        <div>
            <div className='backgroundiamge-sanairport'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div>
                            <h4 className='FRANCISCO-h4'>SAN FRANCISCO AIRPORT TRANSPORTATION</h4>

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
                    <div className='col-11 text-center mt-5'>
                        <h2 style={{ fontWeight: "600" }}>BOOK YOUR SFO CAR SERVICE TODAY</h2>
                        <h3 className='Private-h3'>Private airport transfers at SFO and all surrounding areas.</h3>
                        <p className='Based-p mt-3 text-center'>Black Fin offers the highest quality SFO airport car service for those important and often time-sensitive trips to and from San Francisco International Airport. Our chauffeurs are required to be on location 10 minutes prior to the scheduled pickup, with curbside access, direct driver communication, and the option for baggage claim retrieval. Our goal is to ensure a stress-free ride whether you’re at the beginning or the end of your journey.</p>
                        <div className='col-md-12 mt-5 mb-4'>
                            <button className='btn btn-view-fleet'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>

                    <div className='col-lg-5 mb-5'>
                        <h2 className='EXPLORE-h2'><strong>SFO Airport FAQ's</strong></h2>
                        <div className="tab">
                            <input type="checkbox" id="chck1" className='inputtav' />
                            <label className="tab-label" for="chck1">What if I can't find my driver at SFO?</label>
                            <div className="tab-content text-start">
                                <p>Call and / or text the main Black Fin office at +1 415 494 8122 and our team will immediately help you make the connection.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" className='inputtav' />
                            <label className="tab-label" for="chck2">What is the procedure for departures drop-off?</label>
                            <div className="tab-content text-start">
                                <p>We will provide you with your driver’s name and phone number 2 hours prior to your pick-up, so you can communicate with them directly if needed. Your driver will also have your name and phone number *if you provided this during the booking process.</p>
                                <p>*This information is extremely helpful for communication, and we ask that you please always give us your best direct contact for the day of service. </p>
                                <p>Typically this service involves curbside drop-off at your designated terminal, however if you want your chauffeur to park the vehicle and assist with transferring your luggage to the ticketing desk this is available for an additional fee. We can also arrange to have an additional greeter meet you at your curbside drop-off point and escort you through the entire security process.</p>
                                <p>The same option is available for international departures same option via the Fast Track service, and a staff member will remain with you all the way through customs.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck3" />
                            <label className="tab-label" for="chck3">What is the procedure for arrivals pick-up? </label>
                            <div className="tab-content text-start">
                                <p>We will provide you with your driver’s name and phone number 2 hours prior to your arrival, so you can communicate with them directly once you are on the ground. Your driver will also have the name and phone number *you provided during the booking process.</p>
                                <p>*This information is REQUIRED for an arrivals pick-up reservation, and we ask that you please always give us your best direct contact for the day of service.</p>
                                <p>If you want someone representing our team to meet you directly at your gate, we are happy to arrange this service. They will escort you to baggage claim, and then out to your curbside vehicle.</p>

                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck4" />
                            <label className="tab-label" for="chck4">What is the difference between curbside pick-up and drop-off, and baggage claim assistance?</label>
                            <div className="tab-content text-start">
                                <p>Curbside pick-up and drop-off is offered at every airport we service, and is a standard part of your transportation experience. The option to have your driver meet you at baggage claim, with or without an additional greeter, to assist with collecting and transferring all bags to your vehicle is available for an additional fee.</p>
                            </div>
                        </div>

                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck5" />
                            <label className="tab-label" for="chck5">Do I have to store and carry my own luggage? </label>
                            <div className="tab-content text-start">
                                <p>Your chauffeur will always help with handling your luggage, both when loading and unloading from the vehicle. Please let us know ahead of time if you are interested in additional assistance, including any escort to baggage claim. Drivers are also able to assist with curbside check-in if that is your preference.</p>
                            </div>
                        </div>


                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck6" />
                            <label className="tab-label" for="chck6">How many bags am I allowed per person?</label>
                            <div className="tab-content text-start">
                                <p>There is no limit on the amount of baggage we are willing to transport for you, please just inform us in advance so we know what size vehicle to assign for your service.</p>
                            </div>
                        </div>

                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck7" />
                            <label className="tab-label" for="chck7">What if my flight is delayed or cancelled?</label>
                            <div className="tab-content text-start">
                                <p>*It is imperative for you to provide your flight information, to the best of your ability, when you make your reservation. This will allow us to monitor and track any and all changes as they are occurring in real time. </p>
                                <p>DELAYED: We are always monitoring your flight updates (if you’ve provided your flight information during the booking process) and are happy to accommodate any timing changes that occur during your air travel experience.</p>
                                <p>CANCELLED: Our team will contact you directly about rebooking (if you’ve provided your flight information during the booking process). You can also always reach out to us.</p>
                                <p>Your original booking quote will remain the same.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 mt-5 text-md-start mb-5'>
                        <img src={urbanairporttransfers} className='img-fluid' width="" />
                    </div>
                    <div className='col-md-5 '>
                        <button className='btn btn-view-fleet'>View Your Fleet</button>
                    </div>

                </div>
            </div>
            <div style={{ backgroundColor: "#F3F3F3" }}>
                <div className='container '>
                    <div className='row'>
                        <div className=' mt-5 mb-5'>
                            <h2 className='Service-h3'>The Urban Worldwide Executive Car Service Experience:</h2>
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
                        <div className='col-md-12 mb-5 '>
                        <button className='btn btn-view-fleet'>View Your Fleet</button>
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

export default SanFranciscoAirport