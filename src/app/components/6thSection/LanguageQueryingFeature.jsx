import React from 'react'

const LanguageQueryingFeature = () => {
    return (
        <>
            <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-[120px]">
                <div className="flex flex-col gap-3 w-[45%] ml-[120px] mt-[135px]">
                    <div className="d-flex flex-column px-3 pe-md-5 container gap-4">
                        <div className='mb-8'>
                            <div className="d-inline-flex justify-content-center align-items-center">
                                <span className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-xs">
                                    Multiple Language Supported
                                </span>
                            </div>
                        </div>
                        <div className="text-black font-semibold text-[32px] mb-6 ">
                            Regardless of where you are from, Afforai is for you
                        </div>
                        <div className="pe-md-3 text-gray-500 font-normal text-[14px] leading-130%">
                            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                        </div>
                    </div>
                </div>
                <div className="mt-5 mt-md-0 col-md-5">
                    <img src="https://afforai.com/img/graphics/laptop-landing-13.png" className="h-auto w-auto p-10 pr-[40px]" />
                </div>
            </div>
        </>
    )
}

export default LanguageQueryingFeature