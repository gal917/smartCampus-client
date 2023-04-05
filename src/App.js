
import './App.css';
import MainPage from './screens/MainPage';
import WaterPage from './screens/WaterPage';
import ContactUs from './screens/ContactPage';

import Students from './screens/StudentsPage';
import Header from './components/MainHeader';
import Fotter from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Fotter/>
    </BrowserRouter>
    </>
  );
}

export default App;
