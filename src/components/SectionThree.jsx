import React from "react";



const SectionThree = () => {
    return (
        <div className="pt-10" id="projects">
            <h1 className="text-[4rem] md:text-[8rem] font-semibold text-center">Project</h1>
            <div className="cards grid items-center gap-12 md:flex  md:flex-row justify-center mx-auto md:justify-evenly py-10">
                <div className="text-center  w-[300px] h-[300px] bg-white shadow-lg shadow--500/40 border-t-4 hover:shadow-stone-400 border-t-[#FF0046] rounded-md">
                    <img className="w-[150px] mx-auto pt-4" src={require('../Portfolio-Assests/images/cloudy.png')} alt="weather" />
                    <h1 className=" text-[2rem]">Weather <span className="font-thin">App</span></h1>
                    <a href="https://github.com/waris-alokozay/Weather-App" target="blank"><img className="w-[30px] mx-auto pt-4" src={require('../Portfolio-Assests/images/github.png')} alt="weather" /></a>
                </div>
                <div className="w-[300px] h-[300px] bg-white shadow-lg shadow--500/40 hover:shadow-stone-400 border-t-4 border-t-[#FF0046] rounded-md">
                    <img className="w-[150px] mx-auto pt-4" src={require('../Portfolio-Assests/images/advice.png')} alt="weather" />
                    <h1 className="text-center text-[2rem]">Advice generator<span className="font-thin">App</span></h1>
                    <div className="flex justify-center mx-[100px]">
                       <a href="https://github.com/waris-alokozay/Advice-generator-app" className="mx-2" target="blank"><img className="w-[30px] mx-auto pt-4" src={require('../Portfolio-Assests/images/github.png')} alt="weather" /></a> 
                       <a href="https://waris-alokozay.github.io/Advice-generator-app/" className="mx-2" target="blank"><img className="w-[30px] mx-auto pt-4" src={require('../Portfolio-Assests/images/www.png')} alt="weather" /></a> 
                    </div>
                </div>
                <div className="w-[300px] h-[300px] bg-white shadow-lg shadow--500/40 border-t-4 hover:shadow-stone-400 border-t-[#FF0046] rounded-md">
                    <img className="w-[150px] mx-auto pt-4" src={require('../Portfolio-Assests/images/budget.png')} alt="weather" />
                    <h1 className="text-center text-[2rem]">Bill <span className="font-thin">Callculator</span></h1>
                    <div className="flex justify-center mx-[100px]">
                        <a href="https://github.com/waris-alokozay/Tip-Calculator" className="mx-2" target="blank"><img className="w-[30px] mx-auto pt-4" src={require('../Portfolio-Assests/images/github.png')} alt="weather" /></a>
                        <a href="https://waris-alokozay.github.io/Tip-Calculator/" className="mx-2" target="blank"><img className="w-[30px] mx-auto pt-4" src={require('../Portfolio-Assests/images/www.png')} alt="weather" /></a>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-[1.2rem] md:text-[2rem] p-8 font-thin">Want to see more <span className="font-normal">projects</span> click <span className="font-normal"><a href="https://github.com/waris-alokozay?tab=repositories" target="blank">here</a></span> </h1>
        </div>
    )
}

export default SectionThree;