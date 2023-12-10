import { React, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const FAQsDetails = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <div className="flex rounded-md p-6 border border-gray-300">
                <div className="text-gray-600 font-normal text-base  w-[950px]">
                    <div className="flex items-center pb-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                        <div className="flex-grow">{question}</div>
                        <div className="text-2xl">
                            {isExpanded ? (
                                <MdArrowDropUp
                                    size={30}
                                    className="flex-shrink-0"
                                    height="1em"
                                    width="1em"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                />
                            ) : (
                                <MdArrowDropDown
                                    size={30}
                                    className="flex-shrink-0"
                                    height="1em"
                                    width="1em"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                />
                            )}
                        </div>
                    </div>
                    <div className={isExpanded ? '' : 'hidden'}>{answer}</div>
                </div>
            </div>
        </>
    )
}

export default FAQsDetails;