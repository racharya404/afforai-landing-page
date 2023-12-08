import React from 'react'

const FileConversionWays = () => {
  return (
    <>
      <div className="px-3 pe-md-5 container flex flex-row gap-5 mt-[120px]">
        <div className="flex flex-col w-[40%] ml-[120px]">
          <img src="https://afforai.com/img/graphics/laptop-landing-14.png" />
        </div>
        <div className="d-flex flex-column px-3 pe-md-5 container gap-4 w-[50%] pr-[80px]">
          <div className='mb-8'>
            <div className="d-inline-flex justify-content-center align-items-center">
              <span className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-500 font-semibold text-xs">
                Get more out of your files
              </span>
            </div>
          </div>
          <div className="text-black font-semibold text-[32px] mb-6 ">
            File Wizard - a game changing new feature
          </div>
          <div className="pe-md-3 text-gray-500 font-normal text-[14px] leading-130%">
            Convert your files with less effort than ever. Afforai's File Wizard feature allows  you to transform your files, in limitless different ways. We can <br/> translate, summarize, or explain your upload in no time.
          </div>
        </div>
      </div>
    </>
  )
}

export default FileConversionWays