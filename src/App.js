import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Home from './Components/Home';
import SubHeader from './Components/SubHeader';
import Footer from './Components/Footer';
import About_us from './Components/About_us';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Components/Services';
import Wordperess from './Components/Service_Pages/Wordperess';
import Ajex from './Components/Service_Pages/Ajex';
import Bootstrap from './Components/Service_Pages/Bootstrap';
import ReactLen from './Components/Service_Pages/ReactLen';
import Veu from './Components/Service_Pages/Vue';
import Net from './Components/Service_Pages/Net';
import MySQL from './Components/Service_Pages/MySQL';
import MongoDB from './Components/Service_Pages/MongoDB';
import MsSQL from './Components/Service_Pages/MsSQL';
import IOS from './Components/Service_Pages/IOS';
import Flutter from './Components/Service_Pages/Flutter';
import Android from './Components/Service_Pages/Android';
import Contact_Us from './Components/Contact_Us';
import { useEffect } from 'react';
import Anguler from './Components/Service_Pages/Anguler';
import Protfolio from './Components/Protfolio';
import Testimonials from './Components/Testimonials';
import GetInTouch from './Components/GetInTouch';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/contact_us" element={<Contact_Us />} />
          <Route path="/services" element={<Services />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/getInTouch" element={<GetInTouch />} />
          
          
          <Route path="/services/wordpress" element={<Wordperess />} />
          <Route path="/services/ajax" element={<Ajex />} />
          <Route path="/services/bootstrap" element={<Bootstrap />} />
          <Route path="/services/react" element={<ReactLen />} />
          <Route path="/services/vue" element={<Veu />} />
          <Route path="/services/anguler" element={<Anguler />} />
          <Route path="/services/net" element={<Net />} />
          <Route path="/services/MySQL" element={<MySQL />} />
          <Route path="/services/MongoDB" element={<MongoDB />} />
          <Route path="/services/MsSQL" element={<MsSQL />} />
          <Route path="/services/iOS" element={<IOS />} />
          <Route path="/services/Flutter" element={<Flutter />} />
          <Route path="/services/Android" element={<Android />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
