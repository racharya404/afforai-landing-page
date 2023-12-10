import React from 'react'

const KeyFeatures = () => {
    return (
        <>
            <div className="flex flex-col items-center container gap-6  mt-[120px]">

                {/* Heading */}
                <div className="text-center max-w-[556px] text-black font-semibold text-[32px] leading-[130%]">
                    Unquestionable accuracy & reliability
                </div>

                {/* Subheading */}
                <div className="text-center max-w-[556px] text-gray-500 font-normal text-[16px] leading-[130%]">
                    We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
                </div>
            </div>
            <div className="flex row mt-10" style={{ paddingBottom: '0.5rem' }}>
                {/* Left Column */}
                <div className="w-[30%] ml-[120px]" >
                    {/* Feature Card Component - Cross Language Querying */}
                    <FeatureCard
                        imageSrc="https://afforai.com/img/graphics/laptop-landing-17.png"
                        title="Trusted by users all over the World"
                        description="Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
                    />
                </div>

                {/* Right Column */}
                <div className="w-[30%] ml-4 ">
                    {/* Feature Card Component - Multiple file types supported */}
                    <FeatureCard
                        imageSrc="https://afforai.com/img/graphics/laptop-landing-18.png"
                        title="Information filtering"
                        description="Afforai gives you the highest quality answers, and filters out any irrelevant information."
                    />
                </div>


                {/* Right Column */}
                <div className="w-[30%] ml-4 mr-[120px]">
                    {/* Feature Card Component - Multiple file types supported */}
                    <FeatureCard
                        imageSrc="https://afforai.com/img/graphics/laptop-landing-19.png"
                        title="Built in Comprehension Model"
                        description="Our powerful comprehension model increases the power of our data retrieval."
                    />
                </div>
            </div>
        </>
    );
};

const FeatureCard = ({ imageSrc, title, description }) => {
    return (
        <div className="d-flex flex-column rounded-3xl border border-gray-300 overflow-hidden h-[285px]">
            {/* Card Header */}
            <div className="h-[200px]" style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                <img src={imageSrc} />
            </div>

            {/* Card Body */}
            <div className="flex-column px-3 pt-2 pb-4">
                {/* Card Title with "NEW" badge */}
                <div className="flex align-items-center gap-2">
                    <span className="text-[15px] font-semibold text-gray-800">{title}</span>
                </div>

                {/* Card Description */}
                <div className="text-[11px] text-gray-600">{description}</div>
            </div>
        </div>
    );
};

export default KeyFeatures;