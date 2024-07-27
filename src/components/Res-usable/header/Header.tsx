'use client'
import React, { useState } from 'react'
import { menuItem } from 'data/data'
import Link from 'next/link'
import CustomArrows from 'components/slider/Slider'
import Container from "components/Res-usable/Container/Container";

function Header() {
  const [Header, setHeader] = useState<string | null>()

  const showMenuHandler = (HeaderMenuName: string) => {
    setHeader(HeaderMenuName)
  }

  return (
    <>
      <Container>
        <header className="relative flex w-7xl flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm">
          <nav className="relative w-full mx-auto">
            <div className="relative sm:flex sm:items-center">
              <div className="flex items-center justify-between">
                <Link className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Brand</Link>
                <div className="sm:hidden">
                  <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-basic-usage-collapse" aria-expanded="false" aria-controls="hs-navbar-basic-usage" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-basic-usage">
                    <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} x2={21} y1={6} y2={6} /><line x1={3} x2={21} y1={12} y2={12} /><line x1={3} x2={21} y1={18} y2={18} /></svg>
                    <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </div>
              </div>

              <div id="hs-navbar-basic-usage" className="border-sky-900 hs-collapse overflow-hidden transition-all duration-300 basis-full sm:block" aria-labelledby="hs-navbar-basic-usage-collapse">
                <div className="flex flex-col gap-y-3 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                  {menuItem.map((nav: any, index: number) => {
                    let dropDown = nav.dropDown
                    return (
                      <React.Fragment key={index}>
                        {dropDown ? (
                          <div className="relative z-50">
                            <button id="hs-mega-menu" type="button" className="sm:p-2 flex items-center w-full text-gray-600 font-medium hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                              {nav.MenuName}
                              <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>
                            <div className="absolute z-50 bg-white shadow-md mt-2">
                              <p>safsadf</p>
                              <p>safsadf</p>
                              <p>safsadf</p>
                              <p>safsadf</p>
                            </div>
                          </div>
                        ) : (
                          <Link key={index} className="sm:p-2 font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">{nav.MenuName}</Link>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </Container>
    </>
  )
}

export default Header
