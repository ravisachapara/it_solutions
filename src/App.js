import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import SubHeader from './Components/SubHeader';
import Footer from './Components/Footer';
import About_us from './Components/About_us';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Components/Services';
import Main from './Components/Service_Pages/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/worpress" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
