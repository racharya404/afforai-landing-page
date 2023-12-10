import React, { useEffect } from "react";
import "./Testimonials.css";

const Scroller = ({ children, direction = "left", speed = "medium" }) => {
    return (
        <div className={`scroller`} data-direction={direction} data-speed={speed}>
            <div className="scroller__inner">{children}</div>
        </div>
    );
};

const TestimonialScroller = () => {
    return (
        <>
            <Scroller speed="slow" style={{ marginBottom: '0' }}>
                <ul className="testimonial-list scroller__inner">
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-1.webp"
                        testimonial="The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research."
                        personDescription="Ghulam Abbas, Solopreneur"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-2.webp"
                        testimonial="I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!"
                        personDescription="Henry Sipchen, Marketing Coordinator"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-3.webp"
                        testimonial="Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)"
                        personDescription="Anatolii, Founder of Savvy Planning Systems"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-4.webp"
                        testimonial="This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch."
                        personDescription="Amulya Pressard, Growth @ Neverinstall"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-5.webp"
                        testimonial="Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product"
                        personDescription="Jay, Founder of FLYTStudios"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-6.webp"
                        testimonial="AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing."
                        personDescription="Thuy Nguyen, CEO Assistance"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/0-0.webp"
                        testimonial="I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan."
                        personDescription="Bayu Wilanda, Web & App Developer"
                    />
                </ul>
            </Scroller>
            <Scroller speed="slow" direction="right">
                <ul className="testimonial-list scroller__inner">
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-1.webp"
                        testimonial="Well done on the launch 🚀 . I am convinced you will have many signs up today because your tool is beneficial. I love the UI. The framework between Afforai Build and Afforai Ask is compelling. I am in a hurry now to train my new assistant 😁"
                        personDescription="Axel Borry, Growth Hacker"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-2.webp"
                        testimonial="This is amazing. We were thinking a solution like this would work wonders in the FAQ/Customer service section for our website. A tool like this that can comprehensively go through information for the most accurate answers is a gem!"
                        personDescription="Balamurali, Web 3 Growth Marketer"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-3.webp"
                        testimonial="This looks very useful, especially if you need to derive insight from unstructured or poorly labeled data."
                        personDescription="Siovash Zarrasvand, Engineer"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-4.webp"
                        testimonial="Amazing product! Works better than ChatGPT. Being able to choose style and tone of voice makes the writing much better and you can’t even notice it’s AI. Congratulations on the great work :)."
                        personDescription="Anna DeMarco, Communication Manager"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-5.webp"
                        testimonial="This is an awesome platform for business AI. I'll 100% be using this. Love the fact that it's free to use and it's not a subscription pricing model, but pay per query. I'm going to have my team bookmark it now!"
                        personDescription="TJ Franco, Founder and CEO"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-6.webp"
                        testimonial="Congratulations on the Launch! I like the user-friendly interface and could get started straight away without the need to watch a video tutorial. I used it to generate a summary for a marketing blog, and I found the content to be smoother than Chat GPT."
                        personDescription="Stephanie, Digital Marketer"
                    />
                    <TestimonialCard
                        profileImage="https://afforai.com/img/testimonials/1-0.webp"
                        testimonial="Afforai has so many different applications and yet doesn't feel overwhelming. It's streamlined and feels fun to use, and the developers clearly put time into making it simple to use. Definitely worth my investment!"
                        personDescription="Daniel Crook, Content
"
                    />
                </ul>
            </Scroller>
        </>
    );
};
const TestimonialCard = ({ profileImage, testimonial, personDescription }) => {
    return (
        <div className="inline-block mr-3">
            <div className="d-flex flex-column rounded-3xl w-[500px] h-[240px] p-[32px]" style={{ border: '1px solid rgb(230, 230, 230)' }}>
                <div className="flex-grow-1 text-wrap h-[145px] text-gray-800 text-[15px] border-b border-gray-300 " >
                    {testimonial}
                </div>
                <div className="flex justify-content-between align-items-center pt-4">
                    <div className="flex align-items-center gap-2">
                        <img src={profileImage} className="img-fluid" style={{ height: '32px', width: '32px' }} />
                        <div className="justify-between mt-2 text-gray-700 text-[11px]" >
                            {personDescription}
                        </div>
                    </div>
                    <div className='ml-auto mt-1'>
                        <a href="https://www.producthunt.com/products/afforai/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center mb-11 rounded-md px-3 md:px-2 py-1" style={{ background: 'rgb(246, 232, 229)', border: '1px solid rgb(255, 60, 5)' }}>
                            <div className="inline-flex items-center gap-1">
                                <img src="https://afforai.com/img/icons/producthunt.svg" alt="Product Hunt logo" height="16" />
                                <span className="text-orange-500 text-[11px] font-semibold">Product Hunt</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div>
            <TestimonialScroller />
        </div>
    );
};

export default Testimonials;
