import React from 'react';

const LanguageSupportSection = () => {

    return (
        <div className="flex row mt-10" style={{ paddingBottom: '0.5rem' }}>
            {/* Left Column */}
            <div className="w-[35%] ml-[150px]" >
                {/* Feature Card Component - Cross Language Querying */}
                <FeatureCard
                    imageSrc="https://afforai.com/img/graphics/laptop-landing-6.png"
                    title="Cross Language Querying"
                    isNew={true}
                    description="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
                />
            </div>

            {/* Right Column */}
            <div className="w-[45%] ml-4 mr-[150px]">
                {/* Feature Card Component - Multiple file types supported */}
                <FeatureCard
                    imageSrc="https://afforai.com/img/graphics/laptop-landing-7.png"
                    title="Multiple file types supported"
                    description="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!"
                />
            </div>
        </div>
    );
};

// FeatureCard Component
const FeatureCard = ({ imageSrc, title, isNew, description }) => {
    return (
        <div className="d-flex flex-column rounded-md border border-gray-300 overflow-hidden h-[300px]">
            {/* Card Header */}
            <div  className="h-[230px]" style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                <img src={imageSrc}/>
            </div>

            {/* Card Body */}
            <div className="flex-column px-3 pt-2 pb-4">
                {/* Card Title with "NEW" badge */}
                <div className="flex align-items-center gap-2">
                    <span className="text-[13px] font-semibold text-gray-800">{title}</span>
                    {isNew && (
                        <div className="py-1 px-2 rounded-full bg-purple-200 text-purple-700 text-[8px] font-semibold">
                            <span>NEW</span>
                        </div>
                    )}
                </div>

                {/* Card Description */}
                <div className="text-[10px] text-gray-600">{description}</div>
            </div>
        </div>
    );
};

export default LanguageSupportSection;
