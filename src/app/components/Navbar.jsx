import React from 'react';
import { headerItems } from '@/static/data';

const Navbar = () => {
    return (
        <>
            <div className="py-0 py-md-4 px-md-5 flex-col navbar navbar-expand-md navbar-light fixed-top mt-6 ml-11 mr-11">
                <div className="w-full container-fluid p-3  border-solid rounded-2xl border-2 border-gray-100 bg-gray">
                    <div className="w-100 flex items-center justify-between">
                        <a
                            href="/"
                            className="flex-shrink-1 justify-start items-center me-0 py-0 navbar-brand flex h-auto space-x-2"
                            style={{ flex: "1 1 0%" }}
                        >
                            <picture>
                                <img
                                    src="https://afforai.com/img/graphics/logo-new-violet.webp"
                                    alt="Afforai Logo" height="24px" width="24px"
                                    className='flex items-center justify-center' />
                            </picture>
                            <span className="text-gray-700 font-medium text-lg text-center h-6 align-middle">
                                Afforai
                            </span>
                        </a>
                        <div className="hidden md:flex justify-center items-center navbar-nav">
                            {headerItems.map((i, index) => (
                                <a key={index} href={i.url} target="_blank" className="mx-2 nav-link">
                                    <span className="text-gray-700 font-medium text-sm ml-5">{i.title}</span>
                                </a>
                            ))}
                        </div>
                        <div className="flex justify-end items-center gap-2 navbar-nav" style={{ flex: "1 1 0%" }}>
                            <a href='https://afforai.com/signup' target="_blank">
                                <button
                                    type="button"
                                    className="new-btn font-semibold text-gray-550 p-1 px-2 text-sm px-md-3 btn btn-primary border-solid rounded-lg border-2 border-gray-100 bg-gray hover:bg-neutral-50" style={{ height: "fit-content" }}
                                >
                                    Log in
                                </button>
                                <button
                                    className="new-btn violet-fill ml-2 p-1.5 px-2 px-md-3 btn btn-primary text-white font-semibold text-sm bg-gradient-to-r from-purple-700 via-purple-600 to-black rounded transition-transform transform-gpu hover:bg-gradient-to-l hover:from-purple-700 hover:via-purple-600 hover:to-black h-auto"
                                >
                                    Try for free
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;