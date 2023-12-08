import React from 'react';
import LanguageSupportSection from './LanguageSupportSection';
import DocumentViewerSection from './DocumentViewerSection';

const WhyChooseUs = () => {

    return (
        <>
            <div className="flex flex-col items-center container gap-6  mt-[120px]">
                {/* Call-to-action button */}
                <div>
                    <div className="items-center justify-center p-2 rounded-md border-2 border-purple-600 text-purple-600 text-[12px]">
                        Why Choose Us?
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center max-w-[556px] text-black font-semibold text-[25px] leading-[130%]">
                    Built for the user
                    <br />
                    <span className="text-center max-w-[556px] text-gray-500 font-normal text-[13px] leading-[130%]">
                        Afforai is where exceptional customer focus meets exceptional technology.
                    </span>
                </div>

                {/* Subheading */}
            </div>
            <LanguageSupportSection />
            <DocumentViewerSection />
        </>
    );
};

export default WhyChooseUs;
