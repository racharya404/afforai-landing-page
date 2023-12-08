import React from 'react'

const ProductivityRepresentation = () => {
    return (
        <>q
            <div className="flex flex-col items-center container gap-6  mt-[120px]">
                {/* Call-to-action button */}
                <div>
                    <div className="items-center justify-center p-2 rounded-md border-2 border-purple-600 text-purple-600 text-[12px]">
                        10x your productivity
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center max-w-[556px] text-black font-semibold text-[25px] leading-[130%]">
                    Save yourself from stress & streamline your workflow
                </div>

                {/* Subheading */}
                <div className="text-center max-w-[556px] text-gray-500 font-normal text-[13px] leading-[130%]">
                    The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents.
                    With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
                </div>
            </div>
            <div className="row mt-[60px]">
                <div className="mx-auto w-3/4 max-w-screen-xl">
                    <img src="https://afforai.com/img/graphics/laptop-landing-5.png" className="img-fluid w-full" />
                </div>
            </div>
        </>
    )
}

export default ProductivityRepresentation;