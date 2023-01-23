import React from "react";
import Typewriter from "typewriter-effect"



const SectionOne = () => {
    return (
        <div className="sectionOne pt-8 grid grid-cols-1 md:grid-cols-2" id="about">
            <div className="leftRec text-center md:text-left p-12  bg-black text-[#f5f5dc] ">
                <h1 className="text-[46px] md:text-[94px] font-semibold">About me</h1>
                <p className="text-[20px] md:text-[40px] font-medium text-[#f5f5dcd3]">I’m a full stack web developer with a proficiency in the MERN stack who loves building attractive and effective web applications.</p>
                <p className="text-[16px] md:text-[30px] font-thin mt-4 text-[#f5f5dca1]">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("I always striving to learn and develop new skills and become a better software engineer.")
                            .start()
                        }}
                    />    
                </p>
                <button className="bg-[#FF0046] text-[10px] md:text-[20px] font-medium mt-4 text-[#000] rounded-full w-[70px] h-[30px] md:w-[100px] md:h-[40px] border-4 border-white-4 hover:border-2 "><a href="#contact">Contact</a></button>
            </div>
            <div className="rightRec h-[400px] md:h-auto  bg-[#FF0046]">
                <img className="w-[300px] md:w-[500px] grid place-items-center mx-auto my-[-40px] md:my-[-60px]" src={require('../Portfolio-Assests/images/alexander-grigoryev-xfSTQRuDoKs-unsplash@0.75x.png')} alt="Skeleton" />
                <p className="text-center ml-6 text-[#8e052a] my-[-50px] md:my-[-100px] font-medium">This is not my Skull!</p>
            </div>
        </div>
    )
}

export default SectionOne;