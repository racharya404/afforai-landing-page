import React from 'react'

const GetStarted = () => {

    return (
        <>
            <div className="bg-cover bg-center rounded-2xl h-[400px] w-[1100px] ml-[90px]  mt-[200px]" style={{ backgroundImage: "url('https://afforai.com/img/graphics/laptop-landing-3.png')" }}>
                <div className="flex flex-col items-center container gap-6 ">

                    {/* Heading */}
                    <div className="text-center max-w-[556px] text-black font-semibold text-[32px] leading-[130%]">
                        Start saving time today!
                    </div>

                    {/* Subheading */}
                    <div className="text-center max-w-[556px] text-gray-500 font-normal text-[16px] leading-[130%]">
                        Join an ever-growing community, and get with Afforai started free of charge!
                    </div>

                    <button
                        className="violet-fill ml-2 py-2 p-1.5 px-5 btn btn-primary text-white font-semibold text-[16px] bg-gradient-to-r from-purple-700 via-purple-600 to-black rounded-md hover:bg-gradient-to-l hover:from-purple-700 hover:via-purple-600 hover:to-black h-auto"
                    >
                        Get Started for Free
                    </button>
                    
                </div>
            </div>
        </>
    )
}

export default GetStarted