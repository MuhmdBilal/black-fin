import React from 'react'
import "./Faq.css"
import Slickimagr from '../Slick/Slickimagr'

function Faq() {
    return (
        <div>
            <div className='backgroundiamge-faqs'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div> <h2 className='ACCOUNT-h2'>FAQ'S</h2></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" style={{ opacity: "0.25" }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
                            <path className="elementor-shape-fill" style={{ opacity: "0.5" }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
                            <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 col-11 mt-5 mb-5">

                        <div className="tabs">
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
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck6" />
                                <label className="tab-label" for="chck6">What if I need to change my reservation?</label>
                                <div className="tab-content text-start">
                                    <p>Contact us in your preferred method and let us know.</p>
                                    <p>Adjustments are handled on a case by case basis depending on the timing</p>
                                    <p>Each vehicle has its own specific procedure for changes with no penalties, ranging anywhere from 3 hours to 7 days — depends on vehicle and type of trip.</p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck7" />
                                <label className="tab-label" for="chck7">What if my flight is delayed or cancelled? How is my airport transportation affected?</label>
                                <div className="tab-content text-start">
                                    <p>Delays — If you have provided your flight information, our team will actively monitor and accommodate for all changes in timing.</p>
                                    <p>Cancelled — If you have provided your flight information, we will contact you about re-booking once a cancellation takes place. You can also reach out to us directly to coordinate a new airport transfer reservation. The previously confirmed fee doesn’t change. </p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck8" />
                                <label className="tab-label" for="chck8">What if I'm traveling with children or pets?</label>
                                <div className="tab-content text-start">
                                    <p>With advance notice, we are happy to provide car seats for all children who require them. We require you to share the age, weight, and height of the child, or children. There is an additional fee of $25 per car seat.</p>
                                    <p><strong>Due to regulatory laws, accompanying adults must install the car seat(s) in the vehicle themselves.</strong></p>
                                    <p>All pets are welcome, with the understanding that cleanliness is top priority. We prefer to have advance notice due to potential driver assignment for your trip (allergies, discomfort, etc.)</p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck9" />
                                <label className="tab-label" for="chck9">Do you offer accessible transportation?</label>
                                <div className="tab-content text-start">
                                    <p>Yes, we do offer accessible transportation options. Please contact our office at +1 415 494 8122 or by emailing info@Black Fi.com to make arrangements. </p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck10" />
                                <label className="tab-label" for="chck10">What forms of payment do you accept? </label>
                                <div className="tab-content text-start">
                                    <p>We accept all major credit cards.</p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck11" />
                                <label className="tab-label" for="chck11">How are you keeping my information secure? </label>
                                <div className="tab-content text-start">
                                    <p >Client security and confidentiality is our top priority. We use encrypted booking technology, and we will never sell your information to third parties.</p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" className='inputtav' id="chck12" />
                                <label className="tab-label" for="chck12">Do you ever offer discounts or coupons?</label>
                                <div className="tab-content text-start">
                                    <p>Yes! Join our mailing list (there’s a form in the website footer) to stay informed about all our seasonal and promotional discounts.</p>
                                    <p>Additionally, we always offer discounted rates for former and active military members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 mt-5'>
                        <h4 style={{ color: "#303179" }}>CONNECT WITH US</h4>
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

export default Faq