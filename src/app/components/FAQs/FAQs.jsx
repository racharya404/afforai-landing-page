import React from 'react'
import FAQsDetails from './FAQsDetails'

const FAQs = () => {
    return (
        <>
            <div className="flex flex-col items-center container gap-6 mt-[140px] mb-[140px]">

                {/* Heading */}
                <div className="text-center max-w-[556px] text-black font-semibold text-[32px] leading-[130%]">
                    FAQs
                </div>

                {/* Subheading */}
                <div className="text-center max-w-[556px] text-gray-500 font-normal text-[16px] leading-[130%]">
                    For more information, check out our&nbsp;
                    <a href='https://help.afforai.com/' className='text-cyan-700 cursor-pointer underline'>
                        Help Center.
                    </a>
                </div>
                <FAQsDetails
                    question="Is Afforai free?"
                    answer="Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits"
                />
                <FAQsDetails
                    question="What are subscription credits versus permanent credits?"
                    answer="Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay."
                />
                <FAQsDetails
                    question="Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?"
                    answer="Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated."
                />
                <FAQsDetails
                    question="Does Afforai support uploading images and video?"
                    answer="Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript."
                />
                <FAQsDetails
                    question="Does Afforai support collaboration between accounts?"
                    answer="Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out."
                />
                <FAQsDetails
                    question="Is my data secured?"
                    answer="Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures."
                />
            </div>
        </>
    )
}

export default FAQs