import React from "react"
import Typewriter from "typewriter-effect"

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[10em] md:mt-[12em]" id="home">
        {/* Hero text my name */}
            <h1 className="text-[18px] md:text-[28px] font-light">My name is <span className="font-normal">Waris Alokozay</span> I’m a</h1>
            <div className="leading-[40px] sm:leading-[80px] md:leading-[120px]">
                <h1 className="text-[3rem] sm:text-[6rem] md:text-[10rem]  px-4 max-w-[1200px] font-semibold text-center">Web developer & <span className="font-thin">Designer</span><span className="text-[10px] sm:text-[18px] md:text-[30px] font-light"><span>
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("I build and design websites")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("For more scroll down")
                        .start()
                    }}
                /></span></span></h1>
            </div> 

            <div className="flex my-4">
               <a href="https://www.linkedin.com/in/varis-alokozay-7029b321a/" target="blank" ><img  src={require('../Portfolio-Assests/images/linkedin.png')} alt="linkedin" className="w-4 md:w-8 mx-2 cursor-pointer" /></a> 
               <a href="https://www.instagram.com/varis.alokozai/" target="blank"><img  src={require('../Portfolio-Assests/images/instagram.png')} alt="Instagram" className="w-4 md:w-8 mx-2 cursor-pointer" /></a> 
               <a href="https://github.com/waris-alokozay" target="blank"><img  src={require('../Portfolio-Assests/images/github.png')} alt="Github" className="w-4 md:w-8 mx-2 cursor-pointer" /></a> 
            </div>
        </div>
    )
}

export default Hero;