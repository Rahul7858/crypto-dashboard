import React from 'react'

//imports reactHooks 
import { useDispatch, useSelector } from 'react-redux'

//import reducer from slices folder
import { selectDay } from '../../../redux/slices/daysSlice'

export const DaysSelector = () => {
  const days = useSelector((state) => state.daysReducer.setDays)
  const dispatch = useDispatch();

  console.log(days)


  //This clickHandler Function dispatch the action on selectDay...
  function clickHandler(event) {
    dispatch(selectDay(event.target.value))
  } 

  return (
    <div>

      {/* I have created buttons to display charts on selected days */}
      <div className="flex justify-center h-12 flex-wrap mx-3 mt-3 md:gap-1 gap-2 pb-1 z-5 ">
        <button value={"1"} className="px-3.5 py-1.5  rounded-md text-sm bg-gray-200 backdrop-blur-md font-semibold lg:mt-2 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400" onClick={clickHandler}>1D</button>
        <button value={"7"} className="px-3.5 py-1.5  rounded-md text-sm bg-gray-200 backdrop-blur-md font-semibold lg:mt-2 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400" onClick={clickHandler}>1W</button>
        <button value={"30"} className="px-3.5 py-1.5  rounded-md text-sm bg-gray-200 backdrop-blur-md font-semibold lg:mt-2 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400" onClick={clickHandler}>1M</button>
        <button value={"180"} className="px-3.5 py-1.5  rounded-md text-sm bg-gray-200 backdrop-blur-md font-semibold lg:mt-2 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400" onClick={clickHandler}>6M</button>
        <button value={"365"} className="px-3.5 py-1.5  rounded-md text-sm bg-gray-200 backdrop-blur-md font-semibold lg:mt-2 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400" onClick={clickHandler}>1Y</button>
      </div>
    </div>
  )
}
