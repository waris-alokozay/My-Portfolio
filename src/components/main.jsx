import React from "react"


import Navbar from "./Navbar"
import Hero from "./Hero"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo.jsx"
import SectionThree from "./SectionThree.jsx"
import SectionFour from "./SectionFour.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

const Main = () => {
    return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Contact />
      <Footer />
    </div>
    )
}



export default Main;