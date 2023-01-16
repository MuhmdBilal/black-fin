import React from 'react'
import Card from '../Card/Card'
import "./Home.css"
import car1 from "../../Assets/lincoln-continental.webp"
import car2 from "../../Assets/cadillac-xts.png.webp"
import car3 from "../../Assets/mercedes-s550.webp"
import car4 from "../../Assets/cadillac-escalade-esv.webp"
import car5 from "../../Assets/chevrolet-suburban.webp"
import car6 from "../../Assets/mercedes-sprinters-shuttle.webp"
import car7 from "../../Assets/executive-mini-coaches.webp"
import car8 from "../../Assets/buses.webp"
// import car9 from "../../Assets/lincoln-continental.webp"
import { HiUserGroup } from "react-icons/hi";
import { FaSuitcase } from "react-icons/fa"
import Slickimagr from '../Slick/Slickimagr'
function Home() {
  return (
    <div >
      <div className='backgroundiamge'>
        <div className='back-color'>
          <div className='container'>
            <div className='row d-flex justify-content-center text-start'>
              <div>
                <h2 className='WORLDWIDE-h2 mt-5'>WORLDWIDE</h2>
                <h1 className='CHAUFFEUR-h2'>CHAUFFEUR SERVICE</h1>
                <h2 className='Private-h2'>Private car service for every occasion.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-down'>
        <div className='container'>
          <div className='row d-flex '>
            <div className='col-12 box-es pt-5 pb-5'>
              <h2 className='book-h2 mt-2 mb-2'>BOOK YOUR RIDE:</h2>
              <button className='btn btn-san mt-2 mb-2'>SAN FRANCISCO</button>
              <button className='btn btn-san mt-2 mb-2'>LOS ANGELES</button>
              <button className='btn btn-san mt-2 mb-2'>EVERYWHERE ELSE</button>

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-11 col-11 mt-5'>
            <h4 className='abc-h4 mt-5'>Black Fin <span className='abc-h2'>CHAUFFEUR SERVICES</span></h4>
            <p className='Based-p mt-5'>Based in San Francisco, Black Fin has been providing luxury car service and corporate transportation services to the Bay Area and beyond for over 40 years, and currently operates in over 700 cities around the world.</p>
            <p className='Based-p'>Recognized for our elite team of industry professionals, 24-hour communication technology, impeccable standards of service, and modern luxury fleet, we have cultivated a reputation of excellence in the corporate and event transportation markets, coordinating seamlessly with DMC’s and event planners to meet all vehicle and logistical needs.</p>
            <p className='Based-p'>In 2020 we expanded with the introduction of our private aviation network, Black FinAir, and in early 2022 launched a yacht charter service. 2022 has also seen a company-wide rebrand, and the acquisition of LA-based Rio Chauffeured Services, which now operates as a subsidiary of our company and serves to dramatically increase our overall California presence. Black Fin is proud to consistently deliver innovative and dynamic transportation services to every niche of the private luxury travel industry.</p>
          </div>

        </div>

      </div>
      <div className='row col-12 d-flex justify-content-center mt-5'>
        <div className='col-12'>
          <Card />
        </div>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-evenly justify-content-center'>
          <div className='col-md-12 col-11 mt-5'>
            <h4 className='abc-h4 mt-5'>OUR <span className='abc-h2'>FLEET</span></h4>
          </div>

          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car1} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>LINCOLN CONTINENTAL</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Lincoln Continental or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 3 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 2 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>


          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car2} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>CADILLAC XTS</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Cadillac XTS or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 3 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 2 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>


          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car3} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>MERCEDES S550</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Mercedes S550 or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 3 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 2 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>


          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car4} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>CADILLAC ESCALADE ESV</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Cadillac Escalade ESV or similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 5 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 4 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car5} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>CHEVROLET SUBURBAN</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Chevrolet Suburban or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 5 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 4 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car6} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>MERCEDES SPRINTERS (SHUTTLE)</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Mercedes Sprinters or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 14 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 10 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car7} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>EXECUTIVE MINI COACHES</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Mini Coaches</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 28-38 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 28-38 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>


          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car6} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>MERCEDES SPRINTERS (EXECUTIVE)</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Mercedes Sprinter or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 14 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 10 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>


          <div className='col-md-3 col-11 box-car mb-5' >
            <img src={car8} className="car1" />
            <h5 className='LINCOLN-h5 mt-4'>BUSES</h5>
            <div className='d-flex justify-content-center'>

              <div className='col-10 mt-3' style={{ borderTop: "2px solid #ed7966" }}>
                <h6 className='Lincoln-h6 mt-4'>Coach or Similar</h6>
                <div className='row d-flex justify-content-center mt-4'>
                  <div className='col-6'>
                    <span className='passengers-span'><HiUserGroup size={20} /> 40-56 passengers</span>
                  </div>
                  <div className='col-6'>
                    <span className='passengers-span '><FaSuitcase /> 40-56 suitcases</span>
                  </div>
                  <p className='wifi-p mt-4'>Wifi • Phone Chargers • Complimentary Water & Newsletter</p>
                </div>
                <button className='BOOK-btn btn mt-4 mb-3'>BOOK NOW</button>
              </div>
            </div>
          </div>

        </div>
      </div>

<div className='home-bottom'>
  <div className='container'>
    <div className='row d-flex justify-content-center'>
      <div className='col-12 pt-4 pb-4'>
        <Slickimagr/>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home