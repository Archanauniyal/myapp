
import './App.css';
import Footer from './components/Footers/Footer';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/Pages/About';
import Btech from './components/Pages/Btech';
import Bcom from  './components/Pages/Bcom';
import Bca from   './components/Pages/Bca';
import Ba  from   './components/Pages/Ba';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='About'element={<About/>}></Route>
  <Route path='/btech'element={<Btech/>}></Route>
  <Route path='/bcom'element={<Bcom/>}></Route>
  <Route path='/bca'element={<Bca/>}></Route>
  <Route path='/ba'element={<Ba/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  
  );
}

export default App;
