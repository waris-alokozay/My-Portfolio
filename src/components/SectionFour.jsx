import React from "react";


const SectionFour = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="leftRec p-4 md:p-0  bg-[#FF0046]">
                <h1 className="text-[3rem] md:text-[5rem] font-medium pt-12 md:p-20 mx-auto text-center md:text-left ">I’m also available on <span className="text-white font-semibold">Upwork</span>,</h1>
                <p className="text-[1.5rem] md:text-[3.5rem] pt-10 md:pt-0 md:pl-20 pb-20 md:pb-40 md:w-[500px] leading-none md:text-left text-center">want to hire me click <span className="font-medium"><a className="text-white" href="https://www.upwork.com/freelancers/~01fdf4c7c48589b959" target="blank">here</a></span></p>
            </div>
            <div className="rightRec grid items-center bg-[#000]">
                <img className="w-[300px] m-16 md:m-0 mx-auto md:mx-auto" src={require('../Portfolio-Assests/upwork-logo.png')} alt="Skeleton" />
            </div>
        </div>
    )
}

export default SectionFour;