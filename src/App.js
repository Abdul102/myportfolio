import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const App = () => {
  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Education" element={<Education/>} />
          <Route path="Portfolio" element={<Portfolio/>} />
          <Route path="About" element={<About/>} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>


</>
  )
}

export default App