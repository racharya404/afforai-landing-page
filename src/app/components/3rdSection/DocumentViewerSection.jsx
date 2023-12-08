import React from 'react';

const DocumentViewerSection = () => {
    return (
        <div className="flex mt-1 pt-1 pb-1">
            {/* Left Column */}
            <div className="flex-column row w-[45%] ml-[150px]" style={{ paddingRight: '0.5rem', width: '48.3333%' }}>
                {/* Feature Card Component - Valuable Data Citation */}
                <div className='mb-4'>
                    <FeatureCard
                        imageSrc="https://afforai.com/img/graphics/laptop-landing-8.png"
                        title="Valuable Data Citation"
                        isNew={true}
                        description="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never lose your time validating information again."
                    />
                </div>

                {/* Feature Card Component - Built in Document Viewer */}
                <FeatureCard
                    imageSrc="https://afforai.com/img/graphics/laptop-landing-10.png"
                    title="Built in Document Viewer"
                    description="Never switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file and refer to it for data citations."
                />
            </div>

            {/* Right Column */}
            <div className="h-[460px] w-[35%] mr-[150px] ml-2">
                {/* Feature Card Component - Unbreakable Security */}
                <div className="flex-column rounded-md border border-gray-300 overflow-hidden h-[615px]">
                    {/* Card Header */}
                    <div className="h-[550px]" style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                        <img src='https://afforai.com/img/graphics/laptop-landing-9.png' />
                    </div>

                    {/* Card Body */}
                    <div className="flex-column px-3 pt-2 pb-4">
                        <div className="flex align-items-center gap-2">
                            <span className="text-[13px] font-semibold text-gray-800">Unbreakable Security</span>
                        </div>

                        {/* Card Description */}
                        <div className="text-[10px] text-gray-600">Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us.
                            <span className='text-cyan-700 cursor-pointer'>Learn more.</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// FeatureCard Component
const FeatureCard = ({ imageSrc, title, isNew, description }) => {
    return (
        <div className="d-flex flex-column rounded-md border border-gray-300 overflow-hidden h-[300px]">
            {/* Card Header */}
            <div className="h-[230px]" style={{ background: 'rgb(245, 245, 245)', borderBottom: '1px solid rgb(230, 230, 230)' }}>
                <img src={imageSrc} />
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

export default DocumentViewerSection;
