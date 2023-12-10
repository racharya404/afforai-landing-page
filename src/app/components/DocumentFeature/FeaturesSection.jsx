import React from 'react';
import { MdCheckBox } from "react-icons/md";

const FeaturesSection = () => {
    return (
        <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-20">
            <div className="flex flex-col gap-3 w-[40%] ml-[120px] mt-[125px]">
                <div className="mb-3 text-black font-semibold text-3xl leading-130%">
                    Say goodbye to long, tiresome documents
                </div>
                <div className="mb-4 me-3 me-md-5 text-gray-500 font-normal text-[14px] leading-130%">
                    Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
                </div>
                <div className="flex flex-col gap-3">
                    <FeatureItem text="A whip smart research assistant" />
                    <FeatureItem text="We speak every language" />
                    <FeatureItem text="Reliable data citation for answers" />
                    <FeatureItem text="Fort-Knox level data security" />
                </div>
            </div>
            <div className='ml-[120px]'>
                <img src="https://afforai.com/img/graphics/laptop-landing-4.png" className="h-auto w-auto p-10 pr-[110px]" />
            </div>
        </div>
    );
};

const FeatureItem = ({ text }) => {
    return (
        <div className="flex items-center text-green-500 font-semibold">
            <MdCheckBox />
            <span className="text-base">&nbsp;&nbsp;&nbsp;&nbsp;{text}</span>
        </div>
    );
};

export default FeaturesSection;
