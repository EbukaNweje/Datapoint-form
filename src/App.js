import React from 'react'
import Header from "./component/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import AllComponent from './component/AllComponent'
import Course from "./component/Course/Course";
import Footer from "./Footer/Footer"
import HomePage from "./component/HomePage"
import About from "./About/About"


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="About" element={<About />} />
         <Route path="/course" element={<Course />} />
         <Route path="/course" element={<Course />} />
         <Route path="/me" element={<Course />} />
      </Routes>
      <AllComponent/>
       <Footer/>
      </Router>
  )
}

export default App
