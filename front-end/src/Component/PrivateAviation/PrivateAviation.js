import React from 'react'
import Slickimagr from '../Slick/Slickimagr'
import privateimg1 from "../../Assets/private-aviation-network-img1.webp"
import privateimg2 from "../../Assets/private-aviation-network-img2.webp"
import UrbanAirng from "../../Assets/cropped-Urban-Wht-logo-300x79-1.png"
function PrivateAviation() {
    return (
        <div>
            <div className='backgroundiamge-faqs'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div>
                            <h4 className='FRANCISCO-h4'>PRIVATE JET CHARTER</h4>

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
                        <h2 className='CORPORATE-h2'>PRIVATE AVIATION: YOU HAVE ARRIVED</h2>
                        <p className='Based-p mt-3'>Black Fin has entered the transcontinental air space with the introduction of our private aviation network, UrbanAir. Adding private jets to our repertoire of transportation services reflects our commitment to meeting the growing demand for private travel, in the wake of the global pandemic and into the future. UrbanAir offers a professional and competitive option for those seeking enhanced flexibility and care within the luxury charter arena.</p>
                        <p className='Based-p mt-3'>Smaller and private jet charters allow for more direct flights via regional airports, saving clients time and energy by reducing extra distance between destinations. In California, this looks like service to the Bay Area’s Oakland International Airport (OAK) and Charles M Schulz – Sonoma County Airport (KSTS), among others – putting you directly in the heart of Napa Valley wine country – and destinations like John Wayne Airport (SNA), Hollywood Burbank Airport (BUR), and San Bernadino International Airport (SBD) if you’re headed to the Los Angeles area.</p>
                        <p className='Based-p mt-3'>“Time-saving access to smaller airports, adaptable flight schedules, and the ability to remain socially distanced will remain vital considerations as we move forward,” says CEO Dave Uziel, “and these are things major airlines just can’t provide. Our goal is to make air travel more streamlined, and our clients more confident in their ability to get to where they want to be, when they want to be there.”</p>
                        <p className='Based-p mt-3'>UrbanAir’s access to more than 25 small, medium and heavy jets creates a range of accommodation options for passengers. All private charters are equipped with a multimedia entertainment system, forward galley with refreshment center, and in-flight wifi. Booking by phone or email. For more information, please contact air@urbanworldwide.com.</p>
                        <div className='row d-flex justify-content-center mt-5 mb-5'>
                            <div className='col-lg-6 mt-2'>
                                <img src={privateimg1} className="img-fluid" />
                            </div>
                            <div className='col-lg-6 mt-2'>
                                <img src={privateimg2} className="figure-md-img " height="280px" width="370px" />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 mt-5'>
                <h4 style={{ color: "#005cb9" }}>CONNECT WITH US</h4>
                <div className='row d-flex justify-content-center'>
                <div className='col-lg-10 mt-3'>
                <p>If you’re interested in booking private aviation-related ground transportation to regional airports in any area, please reach out to us to start an inquiry.</p>

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
                <img src={UrbanAirng} className="img-fluid mt-4 mb-5" width="320px"/>
                    {/* 
                    <img src={corporatetravelimg} className="img-fluid border mb-3" width="350px"/> */}

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

export default PrivateAviation