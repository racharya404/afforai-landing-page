import React from 'react';
import FeaturesSection from "./DocumentFeature/FeaturesSection";
import ProductivityRepresentation from './Productivity/ProductivityRepresentation';
import WhyChooseUs from './Choose/WhyChooseUs';
import MostVersatile from './Versatile/MostVersatile';
import MultipleLanguageSupported from './Languages/MultipleLanguageSupported';
import MoreOutOfFiles from './Files/MoreOutOfFiles';
import DifferentModesAvailable from './Modes/DifferentModesAvailable';
import SeamlessIntegration from './Integration/SeamlessIntegration';
import AfforaiAccuracy from './Accuracy/AfforaiAccuracy';
import FounderPromise from './Promise/FounderPromise';
import GetStarted from './JoinUs/GetStarted';
import FAQs from './FAQs/FAQs';
import UserReviews from './Reviews/UserReviews';
import Footer from './Footer';


// Component displaying the main page content
const MainPage = () => {
    // Array representing our specialization areas
    const ourSpecialization = [
        { title: "Summarize Key Findings" },
        { title: "Compare Between Documents" },
        { title: "Search For Answers" },
        { title: "Ask in Any Language" }
    ];

    const userProfiles = [
        //Can be integrated from user database
        { profile_photo: `https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-is-wearing-glasses-in-silhouette-on-a-dark-background-image_2886069.jpg` },
        { profile_photo: `https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg` },
        { profile_photo: `https://media.istockphoto.com/id/173250761/tr/foto%C4%9Fraf/front-profile-of-a-young-male-on-a-white-background.jpg?s=170667a&w=0&k=20&c=nWICPPY5uYwYu1DWzI1MumWYhBf5VJo8qgf-OV9Kh3c=` },
        { profile_photo: `https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp` },

    ];

    const userCount = 20000;
    return (
        <>
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

                <div className="flex flex-col items-center line-height-[100%] z-2 bg-cover bg-center rounded-2xl h-[380px] w-full sm:w-[640px] md:w-[768px] lg:w-[1080px] xl:w-[1280px] mb-10" style={{ backgroundImage: "url('https://afforai.com/img/graphics/laptop-landing-3.png')" }}>
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

                    {/* Next Image */}
                    <div className="flex z-2 mt-10 items-center box-border">
                        <img
                            src="https://afforai.com/img/graphics/laptop-landing-1.png"
                            className="h-[500px] ml-50 mr-50"
                        />
                    </div>
                    <div>
                        <div className="text-center text-gray-500 text-base mt-11">
                            Loved by <span className="text-purple-600">{userCount}+</span> users around the world
                        </div>
                        <div className='flex justify-center mt-4'>
                            {userProfiles.map((item, index) => (
                                <img
                                    src={item.profile_photo}
                                    key={index}
                                    className={`h-[50px] w-[50px] p-0.5 rounded-full border-2 border-sky-400 ${index > 0 ? 'ml-[-5%]' : ''}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-[390px] flex-row'>
                <FeaturesSection />
                <ProductivityRepresentation />
                <WhyChooseUs />
                <MostVersatile />
                <DifferentModesAvailable />
                <MultipleLanguageSupported />
                <MoreOutOfFiles />
                <SeamlessIntegration />
                <AfforaiAccuracy />
                <UserReviews />
                <FounderPromise />
                <GetStarted />
                <FAQs />
            </div>
        </>
    );
};

export default MainPage;
