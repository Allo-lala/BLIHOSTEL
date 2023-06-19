 import React from 'react'
 import Image from 'next/image'
 
 const Header = () => {
    return (
      <div className="relative  px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Great Thing Take Time 
                <br className="hidden md:block" />
               let&apos;s Give {' '}
                <span className="inline-block text-deep-purple-accent-400">
             What we Can 
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Pragati Soical welfere trust is a organization 
                which help blind poeple to build there dream by 
                providing them a house, food, education, so  everybody 
                has a fare chance 

              </p>
            </div>
            <div className="flex items-center">
              <a
               
                className="inline-flex items-center  justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
               Donate 
              </a>
              <a
               
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center rouded h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <Image
            src="/Donation-img.jpg"
            className="object-cover   object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt=""
            width={900}
            height={500}
            // layout="fill"
          />
        </div>
      </div>
    );
  };



  export default Header;