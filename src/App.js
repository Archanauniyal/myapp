
import './App.css';
import Footer from './components/Footers/Footer';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/Pages/About';
import Btech from './components/Pages/Btech';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='About'element={<About/>}></Route>
  <Route path='/btech'element={<Btech/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  
  );
}

export default App;
