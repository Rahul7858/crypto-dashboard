//imports reactHooks
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//imports reducer from slices folder
import { selectedCurrency } from '../../redux/slices/CurrencySlice';
import { selectSymbol } from '../../redux/slices/symbolSlice';

//import convertCurrency from common folder
import { convertCurrency } from '../common/currencyToSymbol';




export const CurrencyDropDown = () => {

  const currency = useSelector((state)=>state.currencyReducer.setCurrency);
  const dispatch = useDispatch();
  const ref = useRef();

  //This handlerCurrency function dispatch selectedCurrency with an action current value
  function handlerCurrency(e){
    e.preventDefault();
    const val = ref.current.value;
    dispatch(selectedCurrency(val))
    ref.current.value = ''
  }

  //This clickHandler function convert currency into symbols('€','₹','$')
  function clickHandler(){
    dispatch(selectSymbol(convertCurrency(currency)))
  }


  return (

    // This is CurrencyDropDown menu with includes three currency options...
    <div className='w-full h-full'>
      <select className='h-12 md:min-w-full text-center rounded-lg font-medium focus:outline-none shadow-md ' value={currency} onChange={handlerCurrency} ref={ref} onClick={clickHandler} >
        <option value={'usd'} className="text-black-600">USD</option>
        <option value={'inr'} className="text-black-600">INR</option>
        <option value={'eur'} className="text-black-600">EUR</option>
      </select>
    </div>
  )
}
