import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-touchspin/lib/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Card from './Component/Card/Card';
import Slickimagr from './Component/Slick/Slickimagr';
import Footer from './Component/Footer/Footer';
import Account from './Component/Accounts/Account';
import Testimonial from './Component/Testimonial/Testimonial';
import Faq from './Component/Faqs/Faq';
import AboutUs from './Component/AboutUs/AboutUs';
import Sanfrancisco from './Component/Sanfrancisco/Sanfrancisco';
import Login from './Component/Login/Login';
import PrivateComponent from './Component/PrivateComponent/PrivateComponent';
import Contact from './Component/Contact/Contact';
import LOSANGELES from './Component/LOSANGELES/LOSANGELES';
import Hawaii from './Component/Hawaii/Hawaii';
import AllLocation from './Component/AllLocation/AllLocation';
import ExecutiveCarService from './Component/ExecutiveCarService/ExecutiveCarService';
import BusinessMeethings from './Component/BusinessMeethings/BusinessMeethings';
import PrivateChauffeur from './Component/PrivateChauffeur/PrivateChauffeur';
import PrivateAviation from './Component/PrivateAviation/PrivateAviation';
import PointToPoint from './Component/PointToPoint/PointToPoint';
import PromTransportation from './Component/PromTransportation/PromTransportation';
import WeddingPlan from './Component/WeddingPlan/WeddingPlan';
import SanFranciscoAirport from './Component/SanFranciscoAirport/SanFranciscoAirport';
import LaxAirport from './Component/LaxAirport/LaxAirport';
import HNL_Airport from './Component/HNL_Airport/HNL_Airport';
import MakeReservation from './Component/MakeReservation/MakeReservation';
// import Accordions from './Component/Accordion/Accordion';
// import Accordions from './Component/Accordion/Accordion';
function App() {
  const [state, setState] = useState(false)
  // console.log("state", state);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars state={state}/>
        <Routes  >
          <Route path='/' element={<Login setState={setState} state={state} />} />
          <Route element={<PrivateComponent state={state} />}>
            <Route path='/home' element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/sanfrancisco" element={<Sanfrancisco />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/losangeles" element={<LOSANGELES/>}/>
            <Route path='/hawaii' element={<Hawaii/>}/>
            <Route path='/all_location' element={<AllLocation/>} />
            <Route path="/executivecarservice" element={<ExecutiveCarService/>}/>
            <Route path="/BusinessMeethings" element={<BusinessMeethings/>}/>
            <Route path="/privateChauffeur" element={<PrivateChauffeur/>}/>
            <Route path="/priavteaviation" element={<PrivateAviation/>}/>
            <Route path="/pointtopoint" element={<PointToPoint/>}/>
            <Route path="/prom" element={<PromTransportation/>}/>
            <Route path='/weddingplan' element={<WeddingPlan/>}/>
            <Route path="/SanFranciscoAirport" element={<SanFranciscoAirport/>}/>
            <Route path="/laxairport" element={<LaxAirport/>}/>
            <Route path="/hnlairport" element={<HNL_Airport/>}/>
            <Route path='/makereservation' element={<MakeReservation/>}/>
          </Route>
        </Routes>
        <Footer state={state}/>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Card/> */}
      {/* <Slickimagr/> */}
      {/* <Accordions/> */}

    </div>
  );
}

export default App;
