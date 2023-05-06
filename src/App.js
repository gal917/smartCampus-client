
import './App.css';
import WaterPage from './screens/WaterPage.js';
import ContactUs from './screens/ContactPage.js';
import Staff from './screens/StaffPage.js';
import Students from './screens/StudentsPage.js';
import Header from './components/MainHeader.js';
import Footer from './components/Footer.js';
import MainPage from './components/screens/MainPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/staff" element={<Staff />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
