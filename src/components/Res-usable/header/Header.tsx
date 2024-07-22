'use client'
import React from 'react'
import { menuItem } from 'data/data'
import Link from 'next/link'
import CustomArrows from 'components/slider/Slider'
function Header() {
  return (

    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
        <nav className="max-w-5/6	 w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative sm:flex sm:items-center">
            <div className="flex items-center justify-between">
              <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Brand</a>
              <div className="sm:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-basic-usage-collapse" aria-expanded="false" aria-controls="hs-navbar-basic-usage" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-basic-usage">
                  <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} x2={21} y1={6} y2={6} /><line x1={3} x2={21} y1={12} y2={12} /><line x1={3} x2={21} y1={18} y2={18} /></svg>
                  <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>



            <div id="hs-navbar-basic-usage" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full sm:block" aria-labelledby="hs-navbar-basic-usage-collapse">
              <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

                {menuItem.map((nav: any) => {
                  let dropDown = nav.dropDown
                  return (
                    <>
                      {dropDown ? (


                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]   [--is-collapse:true] sm:[--is-collapse:false] ">
                          <button id="hs-mega-menu" type="button" className="hs-dropdown-toggle sm:p-2 flex items-center w-full text-gray-600 font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                            {nav.MenuName}  <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          </button>
                          <div className="hs-dropdown-menu transition-[height] sm:transition-[opacity,margin] duration-300 ease-in-out sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10  top-full start-0 min-w-60 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 sm: before:absolute" role="menu" aria-orientation="vertical" aria-labelledby="hs-mega-menu">
                            <div className="sm:grid sm:grid-cols-3">


                              <div className="flex flex-col">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  About
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Services
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Customer Story
                                </a>
                              </div>
                              <div className="flex flex-col">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Careers
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Careers: Overview
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Careers: Apply
                                </a>
                              </div>
                              <div className="flex flex-col">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Log In
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                  Sign Up
                                </a>
                              </div>


                            </div>
                          </div>
                        </div>

                      ) :

                        <Link className="sm:p-2 font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">{nav.MenuName}</Link>

                      }
                    </>





                  )
                })}


              </div>
            </div>


          </div>
        </nav>
      </header>





    </>





  )
}

export default Header