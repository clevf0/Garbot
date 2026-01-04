import {BrowserRouter, Routes, Route} from "react-router-dom";

import Nav from './components/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contacts/Contacts.jsx'
import Unknown from './pages/Unknown/404.jsx'

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />

              <Route path="*" element={<Unknown/>} />

          </Routes>
      </BrowserRouter>
  );
}


export default App
