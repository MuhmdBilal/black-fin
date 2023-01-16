import React from 'react'
import "./Sanfrancisco.css"
import Slider from "react-slick";
import Slickimagr from '../Slick/Slickimagr'
function Sanfrancisco() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (

        <div>
            <div className='backgroundiamge-francisco'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div>
                            <h4 className='FRANCISCO-h4'>SAN FRANCISCO</h4>
                            <h2 className='ACCOUNT-h2'>Car Service</h2>
                            <p className='Premier-p'>Premier chauffeured services in San Francisco and all surrounding areas.</p>
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
                    <div className='col-lg-11 francisco-box mt-5 mb-5'>
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-11'>
                                <div className='row d-flex justify-content-center justify-content-around'>


                                    <div className='col-lg-6  mt-4'>
                                        <div className="mb-3 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>From Location</label>
                                            <input type="text" className="form-control pt-3 pb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. 123 Main St, San Francisco Ca' />

                                        </div>
                                    </div>

                                    <div className='col-lg-6  mt-4'>
                                        <div className="mb-3 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>To Location</label>
                                            <input type="text" className="form-control pt-3 pb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. SFO Airport' />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-11'>
                                <div className='row'>


                                    <div className='col-lg-6'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-lg-7'>
                                                <div className="mb-3 text-start">
                                                    <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>Pickup Date</label>
                                                    <input type="date" className="form-control pt-3 pb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. SFO Airport' />
                                                </div>
                                            </div>
                                            <div className='col-lg-5'>
                                                <div className="mb-3 text-start">
                                                    <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>Pickup Time</label>
                                                    <input type="time" className="form-control pt-3 pb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. SFO Airport' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-md-6'>
                                                <div className="mb-3 text-start">
                                                    <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>Passengers</label>
                                                    <input type="number" className="form-control pt-3 pb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Passengers' />

                                                </div>
                                            </div>
                                            <div className='col-lg-6 text-start mt-4'>
                                                <label class="form-check-label" for="gridCheck">
                                                    Return
                                                </label>
                                                <div class="form-check mt-2">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-5'>
                            <div className='col-11'>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button" style={{ fontSize: '20px', fontWeight: "500" }} >Let’s Ride</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-11'>
                        <h2 className='Trust-h4'>Trust Black Fin with all your<br />
                            <span style={{ color: "#303179" }}>San Francisco transportation.</span></h2>
                        <p className='Based-p mt-5'>San Francisco. San Fran. SF. With landmarks like The Golden Gate Bridge, Lombard Street, Alcatraz Island and Fisherman’s Wharf, there’s a lot of life packed into this 7-mile City by the Bay.</p>
                        <p className='Based-p mt-3'>Often noted for its cool summers, steep rolling hills, eclectic mix of architecture and frequent dense fog (which has its own <span style={{ color: "#c36" }}>Instagram account</span>), Black Fin is proud to have called San Francisco <span style={{ color: "#c36" }}>home</span> for over 40 years. Whether you’re enjoying a famed Irish coffee at <span style={{ color: "#c36" }}>The Buena Vista</span>, exploring the Chinatown district, or taking advantage of the globally-recognized arts and entertainment cultures, time spent here is always memorable, and we can’t wait to show you around.</p>
                        <p className='Based-p mt-3'>Meanwhile, with so many destinations in the immediate surrounding areas — Napa Valley, Muir Woods, Marin County, Sonoma, and more — you’ll never run out of things to do. Perhaps the biggest question is, how long can you stay?</p>
                    </div>
                </div>
            </div>

            <div className='san-iamge mb-5 mt-5'>
                <div className='san-imagecolor'>
                    <h2 className='san-h2 pt-5'>Exploring San Francisco, the bay area, and<br /> beyond.</h2>
                    <h3 className='san-h3 pt-3 pb-5'>Black Fin provides San Francisco chauffeur service to all your desired<br /> destinations. Luxury black car experiences for every occasion.</h3>
                </div>
            </div>


            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-lg-5  text-md-start mb-5'>
                        <iframe className='video-link' src="https://www.youtube.com/embed/hanE_bysWro" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className='col-lg-7 mb-5'>
                        <h2 className='EXPLORE-h2'>EXPLORE OUR SAN FRANCISCO<br /> CAR SERVICES:</h2>
                        <div className="tab">
                            <input type="checkbox" id="chck1" className='inputtav' />
                            <label className="tab-label" for="chck1">What does the basic Black Fin booking process look like?</label>
                            <div className="tab-content text-start">
                                <p>There are three ways to book with us: via email, by texting +1 415 494 8122, or by filling out the online reservation form </p>
                                <p>You can always call the same number to speak in person with a member of our team, but we do not take reservations over the phone. </p>
                                <p>Each trip is built specifically around our client, meaning you won’t be asked to agree to a ‘standard’ package that perhaps includes details that don’t apply to you, or doesn’t encompass your personalized needs. Your reservation will be uniquely your own.</p>
                                <p>On the day of your trip, your driver information is provided 2 hours prior to pick-up, meaning we’ll share their name and cell phone number with you for ease of communication. They will also have your best contact method.</p>
                                <p>Our internal team provides 24-hour customer service, tracking, and communication, so we are always right here if you need any assistance. </p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" className='inputtav' />
                            <label className="tab-label" for="chck2">What services and amenities are included in my ride? </label>
                            <div className="tab-content text-start">
                                <p>In addition to clear communication, prompt arrivals, and impeccable professionalism, our entire fleet consists of late-model executive and luxury vehicles, meaning you will always be traveling in comfort and style. </p>
                                <p>You can expect your chauffeur to be masked, per our continuing Covid safety protocols, and they will always assist you in whatever manner is appropriate, whether that be luggage handling, getting to and from the vehicle, coordinating vehicle logistics, and whatever other needs you may have. </p>
                                <p>Bottled water and WiFi access are standard in all our vehicles.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck3" />
                            <label className="tab-label" for="chck3">What add-on amenities are available to me? </label>
                            <div className="tab-content text-start">
                                <p>We are always happy to accommodate your personalized requests. We can arrange beverage and snack options, provide additional amenities like reading material or pet treats, and of course have car seats and boosters available for any children who maybe be traveling with you.</p>
                                <p><strong>Note</strong>: Due to federal regulations, parents must personally install the provided car seat or booster into the vehicle at pick-up.</p>
                                <p>Any fees associated with enhancing your experience with us should be discussed during the booking process – simply communicate your requests in advance with your reservation specialist and they will be built directly into your transportation package.</p>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck4" />
                            <label className="tab-label" for="chck4">How is Black Fin different than other transportation companies?</label>
                            <div className="tab-content text-start">
                                <p>The Black Fin customer service is second-to-none, specifically when it comes to communication. Whereas many transportation services use a third-party answering service overnight, someone from our dedicated team of professionals is available to you at all times, 24-hours a day, meaning you will never receive less than the most attentive and professional service from someone who is fully familiar with your personalized reservation. </p>
                                <p>We are a family-owned, private company with over 40 years  of experience, and make a point to balance the knowledge and expertise we’ve gained from the past with innovation for the future. This is evident in our modern, late-model fleet, push toward green energy solutions by employing several electric vehicles, and the sophisticated booking and tracking technology we use to guarantee that every detail of every trip is accounted for, always. </p>
                                <p>And one of the things we are most proud of is our proactive position on meeting every request if it is feasibly possible. We have a ‘make it happen’ approach that we’ve cultivated by operating a streamlined and highly skilled team who are capable of rising to the occasion and managing logistics that seem unmanageable. We dislike saying no, and our willingness to show up for our clients is one of the reasons we’ve been able to maintain decades-long relationships with so many of you</p>
                            </div>
                        </div>

                        <div className="tab">
                            <input type="checkbox" className='inputtav' id="chck5" />
                            <label className="tab-label" for="chck5">What is your cancellation policy?</label>
                            <div className="tab-content text-start">
                                <p>Contact us in your preferred method and let us know.</p>
                                <p>Adjustments are handled on a case by case basis depending on the timing.</p>
                                <p>Each vehicle has its own specific cancellation policy, ranging anywhere from 3 hours to 7 days — depends on vehicle and type of trip.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <button className='btn btn-view-fleet'>View Your Fleet</button>
                    </div>
                </div>
            </div>


            <div className='fluid-container ' style={{ background: "#000" }}>
                <h2 className='TESTIMONIALS--h2 pt-5'>TESTIMONIALS</h2>
                <div className='row col-12 d-flex justify-content-center'>
                    <div className='col-lg-8 p-4 mt-5' style={{border: "2px solid #1376BC", borderRadius: "5px"}}>
                        <Slider {...settings}>
                            <div>
                                <h4 className='slid-he'>"Our driver Stephen was awesome! Very professional and knowledgeable of traffic situations. He was early for the pick up at 6:15 AM and early for the pick up home. Will use this service again."</h4>
                                <h3 className='Debbie-h3 mt-4'>Debbie G.</h3>
                                <p className='Oakland-p'>Milpitas, CA</p>
                            </div>
                            <div>
                                <h4 className='slid-he'>"Super professional, prompt and courteous service. They have also helped me out of a few jams where another limo service cancelled on us last second. I would highly recommend them. Wouldn’t use anyone else."</h4>
                                <h3 className='Debbie-h3 mt-4'>Kirk C.</h3>
                                <p className='Oakland-p'>Oakland, CA</p>
                            </div>
                            <div>
                                <h4 className='slid-he'>"Black FinBCN is amazing. No matter what my travel needs are they have me covered. Never an issue and great customer service. Just flew into NY and it was an easy and fast transfer to my hotel. Would definitely recommend them to friends and family."</h4>
                                <h3 className='Debbie-h3 mt-4'>Eddie P.</h3>
                                <p className='Oakland-p'>South San Francisco, CA</p>
                            </div>
                            {/* <div>
                                <h3>2</h3>
                            </div> */}
                            
                        </Slider>
                    </div>
                    <div className='col-md-5 mt-5 mb-5'>
                        <button className='btn btn-view-fleet'>View Your Fleet</button>
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

export default Sanfrancisco