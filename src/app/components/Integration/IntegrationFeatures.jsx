import React from 'react'

const IntegrationFeatures = () => {
    return (
        <>
            <div className="flex flex-col items-center container gap-6  mt-[120px]">
                {/* Call-to-action button */}
                <div>
                    <div className="items-center justify-center p-2 rounded-md border-2 border-purple-600 text-purple-600 text-[12px]">
                        Seamless Integrations - Coming Soon
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center max-w-[556px] text-black font-semibold text-[32px] leading-[130%]">
                    Upload Files directly from Google Drive, One Drive & Dropbox
                </div>

                {/* Subheading */}
                <div className="text-center max-w-[556px] text-gray-500 font-normal text-[16px] leading-[130%]">
                    Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
                </div>
            </div>
            <div className=" mt-[60px]">
                <div className="max-w-screen-xl items-center ml-[250px]">
                    <img src="https://afforai.com/img/graphics/laptop-landing-15.png" width={700} />
                </div>
            </div>
        </>
    )
}

export default IntegrationFeatures