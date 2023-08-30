import React from 'react'

//imports reactsHooks
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

//import reducer from slices folder
import { selectCoin } from '../../../redux/slices/selectedCoinSlice'

export const CoinDropDown = () => {
  const coins = useSelector((state) => state.coinsApiReducer.coins);
  const currentCoin = useSelector((state) => state.selectedCoinReducer.setCoin)

  const dispatch = useDispatch();
  const ref = useRef();

  //This handlerCoin Function dispatch the action on selectCoin...
  function handleCoin(e) {
    e.preventDefault();
    const val = ref.current.value;
    dispatch(selectCoin(val));
  }

  return (
    <div className='mt-4  '>

      {/* dropdown menu for coins.. */}
      <select className='h-10 bg-slate-100 text-center px-2 rounded-lg font-medium focus:outline-none drop-shadow-md' onChange={handleCoin} ref={ref} value={currentCoin}>
      <option selected disabled hidden>Loading...</option>
        {
          coins.map((item) => {
            return <option key={item.symbol} value={item.id}>{item.name}</option>
          })
        }
      </select>
    </div>
  )
}
