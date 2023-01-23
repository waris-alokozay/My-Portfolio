import React from "react";

const SectionTwo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="leftRec bg-black md:bg-[#FF0046] grid place-items-center h-[400px] md:h-auto">
                <h1 className="text-[100px] md:text-[233px] font-semibold text-center text-[#f5f5dc]">Skills</h1>
            </div>
            <div className="rightRec h-[400px] md:h-auto bg-[#FF0046] md:bg-black grid grid-cols-4 md:py-[100px] px-[40px] md:px-[100px] place-items-center">
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/js.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/science.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/tailwind.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/bootstrap.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/node-js.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/api.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/mongodb.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/WordPress.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/premiere-pro.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/illustrator.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/indesign.png')} alt="js" />
            <img className="w-[80px] p-2 md:w-[100px] py-6 md:py-10 " src={require('../Portfolio-Assests/images/photoshop.png')} alt="js" />
            </div>
        </div>
    )
}

export default SectionTwo;