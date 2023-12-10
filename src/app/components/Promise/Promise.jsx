import React from 'react'

const Promise = () => {
    return (
        <>
            <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-[120px]">
                <div className="flex flex-col gap-3 w-[70%] ml-[120px] mt-[135px]">
                    <div className="d-flex flex-column px-3 pe-md-5 container gap-4">
                        <div className='mb-8'>
                            <div className="d-inline-flex justify-content-center align-items-center">
                                <span className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-xs">
                                    My promise to you
                                </span>
                            </div>
                        </div>
                        <div className="text-black font-semibold text-[32px] mb-6 ">
                            100% money back guaranteed if you are not satisfied
                        </div>
                        <div className="pe-md-3 text-gray-500 font-normal text-[14px] leading-130%">
                            We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
                        </div>
                    </div>
                </div>
                <div className="mt-[130px]">
                    <img src="https://afforai.com/img/graphics/laptop-landing-20.png" className="h-auto w-auto p-10 pr-[120px]" />
                </div>
            </div>
        </>
    )
}

export default Promise