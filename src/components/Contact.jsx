import React from "react";


const Contact = () => {
    return (
        <div className="grid items-center text-center" id="contact">
            <h1 className="text-[3rem] md:text-[10rem] font-semibold my-6" >Get in touch</h1>
            <p className="text-[1.2rem] md:text-[3rem] font-light mx-8 md:mx-80">My inbox is always open. Whether you have a <span className="font-normal">question</span> or just want to say <span className="font-normal">hi</span>, I’ll try my best to get back to you!</p>
            <button className="bg-[#FF0046] text-white md:text-[1.2rem]  rounded-full w-24 h-10 md:w-32 md:h-16 mx-auto my-12  border-4 border-[#000] hover:border-2 "><a href = "mailto: waris.alokozay786@gmail.com">Send Email</a>
</button>
        </div>
    )
}

export default Contact;