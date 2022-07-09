import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/wordpress" element={<Wordperess />} />
          <Route path="/services/ajax" element={<Ajex />} />
          <Route path="/services/bootstrap" element={<Bootstrap />} />
          <Route path="/services/react" element={<ReactLen />} />
          <Route path="/services/vue" element={<Veu />} />
          <Route path="/services/net" element={<Net />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
