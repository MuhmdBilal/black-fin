import React from 'react'
import abouturban from "../../Assets/about-urban-worldwide.jpg.webp"
import Slickimagr from '../Slick/Slickimagr'

function AboutUs() {
    return (
        <div>
            <div className='backgroundiamge-Aboutus'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div> <h2 className='ACCOUNT-h2'>ABOUT US</h2></div>
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
                        <h4 className='WELCOME-h4'>OUR HISTORY</h4>
                        <p className='Ourp mt-4'>My father, Eli Uziel, took the biggest risk of his life when he moved our family from Israel to San Francisco in the late 1970’s. It was a decision fueled by hope: he wanted opportunities that would never exist in his childhood home, and imagined more for his own children. </p>
                        <p className='Ourp text-start mt-4'>With this vision of the future, he and his brother Abe began building a first-class transportation company from the ground up, eventually expanding beyond the Bay Area. Their network of drivers and clients became not only friends, but extended family — people to whom my father dedicated the next 30 years of his life.</p>
                        <p className='Ourp mt-4'>Being first and foremost a family business, personal relationships are the foundation of everything we’ve built here at Urban Worldwide. My father took his well-deserved retirement in 2009, and today I manage this growing intercontinental organization with the help of my incredible team. We now operate in over 700 cities around the world, and have offices in both San Francisco and Los Angeles.</p>
                    </div>
                    <div className='col-md-5 col-11 pt-2 pb-2'>
                        <img src={abouturban} className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row d-flex justify-content-center mt-5 mb-5'>
                    <div className='col-lg-11'>
                        <h3 className='Worldwide-h3'>Black Fin  dedication to client satisfaction remains paramount, even as we maintain the resourcefulness to support our continued expansion, and we are proud to uphold my father’s legacy in the transportation business.</h3>
                    <p className='Ourp mt-4'>Our success is (literally) driven by a highly-experienced, round-the-clock team with the most streamlined technology at their disposal. Our luxury fleets are updated regularly, with vehicle models at the forefront of design and innovation. And while promises are inherently risky, we stand behind our guarantee that we are always working to get you to your destination in the most efficient and enjoyable way possible, without exception.</p>
                    <p className='Ourp mt-2'>Punctual, stress-free transportation should be something you can count on, and that principle is reinforced every time our chauffeurs step into their vehicles. With safety, professionalism and excellence as our guiding edicts, we look forward to traveling with you soon.</p>
                    <p className='Ourp mt-2' style={{color: "#303179"}}><strong>And by the way — your ride is here.</strong></p>
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

export default AboutUs