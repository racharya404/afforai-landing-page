import React from 'react';

// Component displaying the main page content
const MainPage = () => {
    // Array representing our specialization areas
    const ourSpecialization = [
        { title: "Summarize Key Findings" },
        { title: "Compare Between Documents" },
        { title: "Search For Answers" },
        { title: "Ask in Any Language" }
    ];

    return (
        <div className="flex flex-col items-center line-height-[100%] z-2">
            {/* AppSumo banner */}
            <div className="inline-flex m-6 items-center p-2 gap-2 border-2 border-gray-700 rounded-[12px] bg-gradient-to-r from-orange-400 to-yellow-500 shadow-backdrop text-gray-700 text-[13px] font-semibold">
                <img src="https://afforai.com/img/icons/appsumo.png" width="26" height="20" alt="AppSumo Icon" />
                Now on AppSumo
                <a href="https://appsumo.8odi.net/3eR3xn" target="_blank" className="flex items-center justify-center p-6-2-6-6 gap-2 border-1 border-gray-700 bg-gradient-to-r from-transparent to-[rgba(255, 255, 255, 0.5)]">
                    <span className='p-1 gap-2 rounded-md border border-solid border-gray-800 color-current bg-gradient-to-r from-transparent to-white bg-opacity-50'>Get Lifetime Deal &gt;</span>
                </a>
            </div>

            {/* Main content */}
            <div className="text-center text-gray-900 font-semibold text-[48px] leading-[130%] max-w-[660px] mb-6">
                Your second brain for maximizing productivity
            </div>
            <div className="text-center text-gray-700 font-normal text-[15px] leading-[150%] max-w-[670px] mb-5">
                Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
            </div>

            {/* Specialization areas */}
            <div className="flex justify-between w-[816px] text-gray-700 text-[12px] leading-[100%] mb-5">
                {ourSpecialization.map((item, index) => (
                    <div key={index} className="flex items-center border-solid rounded-md p-1 pl-2 pr-2 border-2 border-gray-100 bg-gray-250">
                        &#10003; {item.title}
                    </div>
                ))}
            </div>

            {/* CTA buttons */}
            <div className="flex-shrink-1 ">
                <button type="button" className="violet-fill pr-8 mr-8 pl-8 p-1.5  btn btn-primary text-white font-semibold text-[16px] bg-gradient-to-r from-purple-700 via-purple-600 to-black rounded-2xl hover:bg-gradient-to-l hover:from-purple-700 hover:via-purple-600 hover:to-black h-auto">
                    Try for free
                </button>
                <button type="button" className="new-btntext-gray-550 p-1 pr-8 pl-8 px-2 text-[16px] px-md-3 btn btn-primary border-solid rounded-2xl border-2 border-gray-100 bg-gray hover:bg-neutral-50">
                    View pricing
                </button>
            </div>
        </div>
    );
};

export default MainPage;
