import React from 'react'
import Testimonials from './Testimonials'

const UserReviews = () => {
    return (
        <>
            <div className="flex flex-col items-center container mt-[120px]">
                <a href="https://www.producthunt.com/products/afforai/" target="_blank" className="mb-2">
                    <img src="https://afforai.com/img/graphics/ph-review.webp" alt="Review 4.9/5" width="170px" />
                </a>
                <div className="text-center mb-2 text-gray-800 font-semibold text-[32px] leading-130%">See what our users say</div>
                <div className="text-center mb-2 text-gray-500 font-normal text-[16px] leading-130%">Loved by thousands, all around the World</div>
            </div>
            <Testimonials />
        </>
    )
}

export default UserReviews