import React from 'react'
import "./Accordion.css"
import staticImage from "../../Assets/staticImage.png"
function Accordions() {
    // const myCounterHandler = (counter: number) => {
    //     console.log(counter);
    //   };
    return (
        <div className='container'>
            <div className="accordion-bral">
                <div>
                    <input className="ac-input" id="ac-3" name="accordion-1" type="checkbox"  />
                    <label className="ac-label text-start active" for="ac-3" aria-expanded="true">Step 1: Ride Info<i></i></label>
                    <div className="article ac-content" aria-expanded="true">
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-lg-5 col-11 mt-4'>
                                <div className='row'>
                                    <div className='col-lg-12 col-11 text-start mb-3'>
                                        <label className='text-start lable-sext mt-4 mb-2'>Select Service Type</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Airport Drop Off</option>
                                            <option value="1">Airport Pickup - Baggage Meet</option>
                                            <option value="2">Airport Arrival - Curbside/Staff Meet</option>
                                            <option value="3">Hourly/As Directed</option>
                                            <option value="4">Transfer (Point to Point)</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-7 text-start'>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label lable-sext  mb-2">Pick-Up Date</label>
                                            <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                    </div>
                                    <div className='col-lg-5 text-start'>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label lable-sext  mb-2">Pick-Up Time</label>
                                            <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='col-lg-12 text-start mb-3'>
                                            <label for="exampleFormControlInput1" className="form-label lable-sext  mb-2">Pick-Up Location</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your Pick-Up Location" />
                                        </div>
                                        <div className='col-lg-12 text-start mb-3'>
                                            <label for="exampleFormControlInput1" className="form-label lable-sext  mb-2">Drop-Off Location</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your Drop-Off Location" />
                                        </div>
                                        <div className='col-lg-5 text-start mb-3'>
                                            <button className='btn btn-vehicle'>Select Vehicle</button>
                                        
                                    </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-5 col-11 mt-5 mb-5'>
                                <img src={staticImage} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input className="ac-input" id="ac-4" name="accordion-1" type="checkbox" />
                    <label className="ac-label text-start" for="ac-4">Stop 2: Select Vehicle<i></i></label>
                    {/* <div className="article ac-content">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.</p>
                        <div style={{ padding: "0 0 40px 40px" }}>

                        </div>
                    </div> */}
                </div>
                <div>
                    <input className="ac-input " id="ac-5" name="accordion-1" type="checkbox" />
                    <label className="ac-label text-start" for="ac-5">Step 3: Final Details<i></i></label>
                    
                </div>
            </div>
        </div>
    )
}

export default Accordions