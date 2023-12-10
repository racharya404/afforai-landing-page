import React from 'react';
import { MdFastForward, MdPower, MdZoomIn } from 'react-icons/md';

const Modes = () => {
    return (
    <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-[120px]">
        <div className="flex flex-col w-[40%] ml-[120px] mt-[100px]">
            <img src="https://afforai.com/img/graphics/laptop-landing-12.png" className='w-[400px]' />
        </div>
        <div className="d-flex flex-column px-3 pe-md-5 container gap-4 w-[50%] pr-[80px]">
            <div className='mb-8'>
                <div className="d-inline-flex justify-content-center align-items-center">
                    <span className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-xs">
                        Different Modes Available
                    </span>
                </div>
            </div>
            <div className="text-black font-semibold text-[32px] mb-6 ">
                Customize your assistant with a range of different modes
            </div>
            <div className="pe-md-3 text-gray-500 font-normal text-[14px] leading-130%">
                Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
            </div>
            <div>
                <ModeCard
                    icon=<MdFastForward size={25} />
                    title="Fast Mode (default)"
                    credit={1}
                    description="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)."
                />
                <ModeCard
                    icon=<MdPower size={25} />
                    title="Powerful Mode"
                    credit={4}
                    description="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)."
                />
                <ModeCard
                    icon=<MdZoomIn size={25} />
                    title="Google Mode"
                    credit={5}
                    description="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers."
                />
            </div>
        </div>
    </div>
    );
};


const ModeCard = ({ icon, title, credit, description }) => {
    return (
        <div className="flex flex-col  mt-10">
            <div className="flex items-center gap-1 mb-2">
                {icon}
                <span className="text-base font-semibold text-purple-900">{title}</span>
                {credit && (
                    <div className="flex items-center px-2 py-1 rounded-lg bg-purple-200 text-purple-700 font-semibold text-xs">
                        <span>{credit} credit</span>
                    </div>
                )}
            </div>
            <div className="text-[13px] text-purple-900 ml-8 ">{description}</div>
        </div>
    );
};

export default Modes;