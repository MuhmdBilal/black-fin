import React from 'react'
import "./Card.css"
function Card() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content'>
                <div className='col-12'>
                    <div className="cards">
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Airport Transfers</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/03/airport-transfer-thumb.jpg" /></div>

                                <div className="desc">Black Fin provides airport transportation to and from SFO, LAX, HNL, and around the world.</div>

                            </article>

                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Executive Travel</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/03/corporate-travel-img.jpg" /></div>

                                <div className="desc">Professionalism our business travel clients know and trust, no matter where you’re traveling.</div>

                            </article>

                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Business Meetings</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/12/Corporate-Transportation.jpg" /></div>

                                <div className="desc">Business meetings, events, timing, and deadlines are critical. Trust us with your most important logistics.</div>

                            </article>
                           
                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Chauffeur Services</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/03/leisure-experiences-bg2.jpg" /></div>

                                <div className="desc">Elevate every experience with chauffeured service to take you anywhere you want to go.</div>

                            </article>

                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Private Aviation</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/10/Airport-Transfers.jpg" /></div>

                                <div className="desc">Take to the skies with UrbanAir, and book private transfers at all international and regional airports.</div>

                            </article>

                        </div>

                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Point-To-Point</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/10/Website-Header-Images-1200-×-400-px-1.png" /></div>

                                <div className="desc">Book hourly chauffeur services for sight-seeing, bar-hopping, city exploration, and more.</div>

                            </article>

                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Winery Tours</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/03/winery-tours-thumb.jpg" /></div>

                                <div className="desc">Experience Napa, Sonoma, and more with group outings, luxury getaways, and exclusive tastings.</div>

                            </article>

                        </div>
                        <div className="card mt-4">
                            <span className="close"></span>
                            <span className="arrow"></span>
                            <article>
                                <h2>Wedding Transport</h2>

                                <div className="pic"><img src="https://urbanworldwide.com/wp-content/uploads/2022/11/Wedding-Transportation.jpg" /></div>

                                <div className="desc">An event to remember, forever. Let our professional wedding transportation team handle the details.</div>

                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card