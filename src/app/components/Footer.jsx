import { footerCompanyLinks, footerFollowLinks, footerLanguageLinks, footerResourcesLinks } from '@/static/data'
import React from 'react'

const Footer = () => {
    return (
        <div className="pt-5 flex w-full m-2">
            <div className="flex  justify-between rounded-lg  p-8 border border-gray-200 w-[99%]">
                <div className="flex flex-col mb-4 mr-2 flex-basis-0 w-[32%] " style={{ gap: '24px' }}>
                    <div className="flex flex-col">
                        <div className="flex gap-2 mb-5">
                            <img src="https://afforai.com/img/graphics/logo-new-violet.webp" alt="Afforai Logo" height="24px" width="24px" className="align-middle" />
                            <div className="text-base font-medium text-gray-700 text-center ">Afforai</div>
                        </div>
                        <div className="text-gray-500 text-[13px] mb-5">
                            Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.
                        </div>
                        <div className="text-gray-500 text-[13px]">Copyright © 2023 Afforai Inc. All rights reserved.</div>
                    </div>
                    <a href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-afforai" target="_blank">
                        <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&theme=light&period=daily" alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt" width="195" height="42" className="w-48 h-10" />
                    </a>
                    <div className="flex flex-col">
                        <div className="text-base font-medium text-gray-700">Backed by</div>
                        <img src="https://afforai.com/img/logos/sputnikatx.png" alt="Sputnik ATX VC" height="46" width="137" />
                    </div>
                </div>
                <div className="flex flex-col" style={{ flexBasis: '160px', gap: '16px' }}>
                    <div className="text-base font-[16px] text-gray-700">Company</div>
                    {footerCompanyLinks.map((i, index) => (
                        <a key={index} href={i.url} target="_blank">
                            <div className="text-gray-700 text-[11px] cursor-pointer">{i.title}</div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col" style={{ flexBasis: '160px', gap: '16px' }}>
                    <div className="text-base font-[16px] text-gray-700">Resources</div>
                    {footerResourcesLinks.map((i, index) => (
                        <a key={index} href={i.url} target="_blank">
                            <div className="text-gray-700 text-[11px] cursor-pointer">{i.title}</div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col" style={{ flexBasis: '160px', gap: '16px' }}>
                    <div className="text-base font-[16px] text-gray-700">Follow Us</div>
                    {footerFollowLinks.map((i, index) => (
                        <a key={index} href={i.url} target="_blank">
                            <div className="text-gray-700 text-[11px] cursor-pointer">{i.title}</div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col" style={{ flexBasis: '160px', gap: '16px' }}>
                    <div className="text-base font-[16px] text-gray-700">Language</div>
                    {footerLanguageLinks.map((i, index) => (
                        <a key={index} href={i.url} target="_blank">
                            <div className="text-gray-700 text-[11px] cursor-pointer">{i.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer