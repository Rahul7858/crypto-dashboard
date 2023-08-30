//imports reactHooks
import React, { useState } from 'react'

//imports components
import { DaysSelector } from './daysSelector/DaysSelector'
import { CoinDropDown } from './coindropdown/CoinDropDown'
import { LineChart } from './charts/LineChart'
import { HorizontalBarChart } from './charts/HorizontalBarChart'
import { VerticalBarChart } from './charts/VerticalBarChart'

export const MiddleSection = () => {

  const [chart, setChart] = useState('LineChart')


  return (

    //Top level div..
    <div className='bg-white'>

      {/* There are two components in this div, which we have placed in the different folder */}
      <div className='flex justify-evenly flex-wrap'>

         {/* DaysSelector component placed in the daysSelector folder */}
        <div className='mx-3'>
          <DaysSelector />
        </div>

         {/* CoinDropDown component placed in the coindropdown folder */}
        <div>
          <CoinDropDown />
        </div>

        {/* dropdown for chart type... */}
        <div className='mt-4'>
          <select className='h-10 bg-slate-100 text-center rounded-lg font-medium focus:outline-none drop-shadow-md' onChange={(e) => setChart(e.target.value)} >
            <option value={'LineChart'}>Line Chart</option>
            <option value={'HorizontalBarChart'}>Horizontal Bar Chart</option>
            <option value={'VerticalBarChart'}>Vertical Bar Chart</option>
          </select>
        </div>
      </div>

      {/* LineChart, HorizontalBarChart and VerticalBarChart  component placed in the charts folder */}
      <div className='min-w-full'>
        {
          chart === 'LineChart' ? (<LineChart />) : chart === 'HorizontalBarChart' ? (<HorizontalBarChart />) : (<VerticalBarChart />)
        }
      </div>
    </div> 
  )
}
