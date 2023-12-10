import React from 'react'

const ChatbotSupportSection = () => {
    return (
        <>
            <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-[120px]">
                <div className="flex flex-col gap-3 w-[40%] ml-[120px] mt-[135px]">
                    <div className="d-flex flex-column px-3 pe-md-5 container gap-4">
                        <div className='mb-8'>
                            <div className="d-inline-flex justify-content-center align-items-center">
                                <span className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-xs">
                                    Most versatile
                                </span>
                            </div>
                        </div>
                        <div className="pe-md-5 text-black font-semibold text-[32px] mb-6 line leading-130%">
                            Create multiple <br /> chatbots for different <br />purposes
                        </div>
                        <div className="pe-md-3 text-gray-500 font-normal text-[14px] leading-130%">
                            Legal documents? Summarizing a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                        </div>
                        <div className="d-flex gap-4 mt-6">
                            <button className="violet-fill pr-8 mr-8 pl-8 p-1.5  btn btn-primary text-white font-semibold text-[16px] bg-gradient-to-r from-purple-700 via-purple-600 to-black rounded-2xl hover:bg-gradient-to-l hover:from-purple-700 hover:via-purple-600 hover:to-black h-auto">Get started</button>
                            <button className="new-btn text-gray-550 p-1 pr-8 pl-8 px-2 text-[16px] px-md-3 btn btn-primary border-solid rounded-2xl border-2 border-gray-100 bg-gray hover:bg-neutral-50">View pricing</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5 mt-md-0 col-md-5">
                    <img src="https://afforai.com/img/graphics/laptop-landing-11.png" className="h-auto w-auto p-10 pr-[110px]" />
                </div>
            </div>
        </>
    )
}

export default ChatbotSupportSection