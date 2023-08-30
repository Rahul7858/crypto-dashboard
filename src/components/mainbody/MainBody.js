import React from 'react'

//import components
import { MiddleSection } from '../middlesection/MiddleSection'
import { TrendingCoin } from '../asidesection/TrendingCoin'
import { CurrencyDropDown } from '../headersection/CurrencyDropDown'
import { SearchBar } from '../headersection/SearchBar'
import { Portfolio } from '../bottomsection/Portfolio'
import { ExchangeCoin } from '../bottomsection/ExchangeCoin'

export const MainBody = () => {
  return (

    //Mainbody content area...
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-2 mx-3 py-3">

        <div  className="grid gap-2 lg:col-span-3">

          {/* There are two components in this div, which we have placed in the headersection folder */}
          <div className="grid gap-1 grid-cols-9 grid-rows-1 md:mr-1">

            {/* CurrencyDropDown component placed in the headersection folder */}
            <div className="col-span-1 w-full">
              <CurrencyDropDown />
            </div>

            {/* SearchBar component placed in the headersection folder */}
            <div className=" grid col-span-8">
              <SearchBar />
            </div>
          </div>

          {/* MiddleSection component placed in the middlesection folder */}
          <div className='bg-white rounded-lg overflow-hidden shadow-md md:mr-1'>
            <MiddleSection />
          </div>

          {/* There are two components in this div, which we have placed in the bottomsection folder */}
          <div className="grid md:grid-cols-2 gap-2 md:mr-1">

            {/* Portfolio component placed in the bottomsection folder */}
            <div className='md:col-span-1'>
              <Portfolio />
            </div>

            {/* ExchangeCoin component placed in the bottomsection folder */}
            <div className=' md:col-span-1'>
              <ExchangeCoin />
            </div>
          </div>
        </div>

        {/* TrendingCoin component placed in the asidesection folder */}
        <aside className='lg:col-span-1 w-full'>
          <TrendingCoin />
        </aside>

      </div>
    </div>
  )
}
