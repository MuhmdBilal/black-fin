import React from 'react'
// import "./Sanfrancisco.css"
import Slider from "react-slick";
import Slickimagr from '../Slick/Slickimagr'
function LOSANGELES() {
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
    <div className='backgroundiamge-angeles'>
        <div className='back-color-one'>
            <div className='col-md-12'>
                <div>
                    <h4 className='FRANCISCO-h4'>LOS ANGELES</h4>
                    <h2 className='ACCOUNT-h2'>CHAUFFEUR SERVICE</h2>
                    <p className='Premier-p'>Premier car services in Los Angeles and all surrounding areas.</p>
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
                <h2 className='Trust-h4'>RIO CHAUFFEURED SERVICES is now<br />
                    <span style={{ color: "#1376BC" }}>Black Fin LA</span></h2>

                    <h2 className='provides-h2'>Black Fin LA provides the finest in luxury limousine service for all your corporate and personal transportation needs.</h2>
                <p className='Based-p mt-5'>Because of our many years of experience in the transportation industry, we are accustomed to catering to the needs of each client. Every request we service, whether for airport transportation, business trips, special events, or a night on the town, receives our undivided attention. Professionally trained dispatchers carefully monitor all trips in progress as well as airport arrivals. We ensure ease of planning, efficient execution, and above all, a top-quality and stress-free service.</p>
                <p className='Based-p mt-3'>Contact us or complete our limo booking forms and find out for yourself why we are perfect in Los Angeles for limousine services. You will be surprised how reasonable and luxurious limo traveling can be! Our booking staff is available 24/7 to reply to your queries and assist you in planning a wonderful time!</p>
                {/* <p className='Based-p mt-3'>Meanwhile, with so many destinations in the immediate surrounding areas — Napa Valley, Muir Woods, Marin County, Sonoma, and more — you’ll never run out of things to do. Perhaps the biggest question is, how long can you stay?</p> */}
            </div>
        </div>
    </div>

    <div className='san-iamge mb-5 mt-5'>
        <div className='san-imagecolor'>
            <h2 className='san-h2 pt-5'>PRIVATE TOURS OF LOS ANGELES.</h2>
            <h3 className='san-h3 pt-3 pb-5'>See Los Angeles in style! Allow our knowledgeable chauffeurs to take you to the most<br/> famous city landmarks, as well as some hidden gems.</h3>
        </div>
    </div>


    <div className='container'>
        <div className='row d-flex justify-content-center mt-5 mb-5'>
            <div className='col-lg-5  text-md-start mb-5'>
                <iframe className='video-link' src="https://www.youtube.com/embed/B-FUYsH5Xj4" title="LOS ANGELES" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className='col-lg-7 mb-5'>
                <h2 className='EXPLORE-h2'>EXPLORE OUR SAN FRANCISCO<br /> CAR SERVICES:</h2>
                <div className="tab">
                    <input type="checkbox" id="chck1" className='inputtav' />
                    <label className="tab-label" for="chck1">Transportation to and from LAX</label>
                    <div className="tab-content text-start">
                        <p>Book your <span style={{ color: "#c36" }}> airport car service</span> for Los Angeles International Airport, Long Beach Airport, Burbank Airport, and more</p>
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" id="chck2" className='inputtav' />
                    <label className="tab-label" for="chck2">Los Angeles City Tours </label>
                    <div className="tab-content text-start">
                        <p>Discover the most sought-after destinations with our our <span style={{ color: "#c36" }}>private city tour services</span>private city tour services in Los Angeles. Visit Hollywood or Disneyland, have unforgettable moments at the famous Santa Monica pier with its iconic Ferris wheel, or let us introduce you to the Natural History Museum of Los Angeles County, California Science Center, The Original Farmers Market, Griffith Park or Griffith Observatory, and more.</p>
                        
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" className='inputtav' id="chck3" />
                    <label className="tab-label" for="chck3">Wedding Planning and Transportation</label>
                    <div className="tab-content text-start">
                        <p>Our team has the experience and expertise to make your wedding day as perfect as you want it to be. With specialty vehicles, individual and group transportation options, and a 24/7 team of professionals to make sure everything runs smoothly, we’re here to create your ultimate Los Angeles wedding transportation experience.</p>
                        
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" className='inputtav' id="chck4" />
                    <label className="tab-label" for="chck4">Corporate Travel</label>
                    <div className="tab-content text-start">
                        <p>Our executive transportation services are the perfect solution for your business travel when it comes to corporate roadshows, convention transportation, corporate meetings, and much more.</p>
                    </div>
                </div>

                <div className="tab">
                    <input type="checkbox" className='inputtav' id="chck5" />
                    <label className="tab-label" for="chck5">Special Events</label>
                    <div className="tab-content text-start">
                        <p>Black Fin offers vehicles from limousines to party buses for a multitude of special occasions: anniversaries, bachelorette parties, prom, bar hopping, event transportation, etc. You can enjoy Los Angeles without worrying about directions, where to park, or who will drive. Our professional chauffeurs will get you where you need to go safely, and in style.</p>
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
                        <h4 className='slid-he'>"My go-to car service in Inglewood when I travel here on business......extremely professional."</h4>
                        <h3 className='Debbie-h3 mt-4'>Bob J.</h3>
                        <p className='Oakland-p'>Inglewood</p>
                    </div>
                    <div>
                        <h4 className='slid-he'>“It was our first time booking a chauffeured ride and we are glad to have chosen them [Rio]. From contacting them to the day of our trip, everything went smoothly without any issues."</h4>
                        <h3 className='Debbie-h3 mt-4'>Thomas A.</h3>
                        <p className='Oakland-p'>California</p>
                    </div>
                    <div>
                        <h4 className='slid-he'>“We have been looking around happen to stumble upon Rio. It was a good decision to book their ride because we got a smooth trip of our business event. For our next travel to the city, we are planning to get their services again!”</h4>
                        <h3 className='Debbie-h3 mt-4'>Frank T.</h3>
                        <p className='Oakland-p'>Los Angeles</p>
                    </div>
                    {/* <div>
                        <h3>2</h3>
                    </div> */}
                    
                </Slider>
            </div>
            <div className='col-md-5 mt-5 mb-5'>
                <button className='btn btn-view-fleet'>ALL TESTIMONIALS</button>
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

export default LOSANGELES