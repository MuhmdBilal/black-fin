import React, { useState } from 'react'
import Slickimagr from '../Slick/Slickimagr'
import { BACKEND_URI } from "../../config/config"
import axios from "axios"
function MakeReservation() {

    const PassengerArray = [
        "1 Passenger",
        "2 Passenger",
        "3 Passenger",
        "4 Passenger",
        "5 Passenger",
        "6 Passenger",
        "7 Passenger",
        "8 Passenger",
        "9 Passenger",
        "10 Passenger",
        "11 Passenger",
        "12 Passenger",
        "13 Passenger",
        "14 Passenger",
        "15 Passenger",
        "16 Passenger",
        "17 Passenger",
        "18 Passenger",
        "19 Passenger",
        "20 Passenger",
        "21 Passenger",
        "22 Passenger",
        "23 Passenger",
        "24 Passenger",
        "25 Passenger",
        "26 Passenger",
        "27 Passenger",
        "28 Passenger",
        "29 Passenger",
        "30 Passenger",
        "31 Passenger",
        "32 Passenger",
        "33 Passenger",
        "34 Passenger",
        "35 Passenger",
        "36 Passenger",
        "37 Passenger",
        "38 Passenger",
        "39 Passenger",
        "40 Passenger",
        "41 Passenger",
        "42 Passenger",
        "43 Passenger",
        "44 Passenger",
        "45 Passenger",
        "46 Passenger",
        "47 Passenger",
        "48 Passenger",
        "49 Passenger",
        "50 Passenger",
        "51 Passenger",
        "52 Passenger",
        "53 Passenger",
        "54 Passenger",
        "55 Passenger",
    ]

    const [status, setStatus] = useState(false)
    // console.log("status", status);
    const [pickUp, setPickUp] = useState("")
    const [dropOff, setDropOff] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('');
    const [service, setService] = useState('');
    const [passengerSelect, setPassengerSelect] = useState('1 Passenger');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('')
   

    const sendData = async () => {
        try {
            await axios.post(`${BACKEND_URI}/send_Reservation_Data`, {
                pickUp,
                dropOff,
                date,
                time,
                service,
                passengerSelect,
                firstName,
                lastName,
                email,
                phone,
                returnDate,
                returnTime
            }).then((res)=>{
                console.log("res", res);
            })
        } catch (e) {
            console.log("e", e);
        }
    }

    return (
        <div>
            <div className='backgroundiamge-faqs'>
                <div className='back-color-one'>
                    <div className='col-md-12'>
                        <div> <h2 className='ACCOUNT-h2'>YOUR RIDE IS HERE</h2></div>
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
                    <div className='col-lg-10 francisco-box mt-5 mb-5'>
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-11 pt-4'>
                                <h2>Complete the Form to View Photos & Prices Instantly</h2>
                                <div className='row d-flex justify-content-center justify-content-around'>
                                    <div className='col-lg-12  mt-4'>
                                        <div className="mb-3 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>PICK UP LOCATION:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Address, Point of Interest, or Airport Code'
                                                value={pickUp} onChange={(e) => setPickUp(e.target.value)} />

                                        </div>
                                    </div>


                                    <div className='col-lg-12  mt-3'>
                                        <div className="mb-3 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>DROP OFF LOCATION:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Address, Point of Interest, or Airport Code'
                                                value={dropOff} onChange={(e) => setDropOff(e.target.value)} />

                                        </div>
                                    </div>




                                    <div className='col-lg-6'>
                                        <div className='row d-flex justify-content-center'>
                                            <div className='col-lg-12'>
                                                <div className="mb-2 text-start">
                                                    <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>Pickup Date</label>
                                                    <input type="date" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. SFO Airport'
                                                        value={date} onChange={(e) => setDate(e.target.value)} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-2 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>Pickup Time</label>
                                            <input type="time" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='eg. SFO Airport'
                                                value={time} onChange={(e) => setTime(e.target.value)} />
                                        </div>
                                    </div>


                                    <div className='col-lg-6 text-start mt-3 mb-3'>
                                        <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>TYPE OF SERVICE:</label>

                                        <select className="form-select pt-2 pb-2" aria-label="Default select example" value={service} onChange={(e) => setService(e.target.value)}>
                                            <option selected>Select Service</option>
                                            <option value="Transfer">Transfer</option>
                                            <option value="Airport Dropoff">Airport Dropoff</option>
                                            <option value="Baggage Meet/Driver Meet">Baggage Meet/Driver Meet</option>
                                            <option value="Hourly/As Directed">Hourly/As Directed</option>
                                            <option value="Curbside/Staff Meet">Curbside/Staff Meet</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-6 text-start mt-3 mb-3'>
                                        <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>PASSENGERS:</label>

                                        <select className="form-select pt-2 pb-2" aria-label="Default select example" value={passengerSelect} onChange={(e) => setPassengerSelect(e.target.value)}>
                                            {
                                                PassengerArray.map((item, index) => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>

                                    <div className='col-lg-6  mt-3'>
                                        <div className="mb-2 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>FIRST NAME:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='FIRST NAME'
                                                value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className='col-lg-6  mt-3'>
                                        <div className="mb-2 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>LAST NAME:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='LAST NAME:'
                                                value={lastName} onChange={(e) => setLastName(e.target.value)} />

                                        </div>
                                    </div>


                                    <div className='col-lg-6  mt-3'>
                                        <div className="mb-2 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>EMAIL ADDRESS:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='EMAIL ADDRESS:'
                                                value={email} onChange={(e) => setEmail(e.target.value)} />

                                        </div>
                                    </div>

                                    <div className='col-lg-6  mt-3'>
                                        <div className="mb-2 text-start">
                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>MOBILE NUMBER:</label>
                                            <input type="text" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                placeholder='MOBILE NUMBER' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-around'>
                            <div className='col-11'>
                                <div className='row'>
                                    <div className='col-lg-12 text-start mt-4'>
                                        <input class="form-check-input" type="checkbox" id="gridCheck" onChange={() => setStatus(!status)} />
                                        &nbsp;&nbsp;<label class="form-check-label" for="gridCheck">
                                            ROUND TRIP
                                        </label>
                                        {
                                            status == true ? (
                                                <div className='row d-flex justify-content-center mt-4'>
                                                    <div className='col-lg-6'>
                                                        <div className='row d-flex justify-content-center'>
                                                            <div className='col-lg-12'>
                                                                <div className="mb-2 text-start">
                                                                    <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>RETURN DATE</label>
                                                                    <input type="date" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='RETURN DATE'
                                                                        value={returnDate} onChange={(e) => setReturnDate(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className="mb-2 text-start">
                                                            <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '20px', fontWeight: "500" }}>RETURN TIME:</label>
                                                            <input type="time" className="form-control pt-2 pb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='RETURN TIME:'
                                                                value={returnTime} onChange={(e) => setReturnTime(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-3 mb-5'>
                            <div className='col-11'>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-info" type="button" style={{ fontSize: '20px', fontWeight: "500" }} onClick={sendData} >Get Prices & Availability</button>
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

export default MakeReservation