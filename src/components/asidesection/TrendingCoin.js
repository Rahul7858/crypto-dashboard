//imports reactHooks
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector';

//import asyn file from apiSlice folder
import { fetchAsyncCoins } from '../../redux/apiSlices/coinsApiSlice';

//imports library
import { RotatingSquare } from 'react-loader-spinner';

//imports assets
import increase from '../../assets/increase.png';
import decrease from '../../assets/decrease.png';

export const TrendingCoin = () => {

  const coins = useSelector((state) => state.coinsApiReducer.coins);
  const symbol = useSelector((state) => state.symbolReducer.setSymbol);
  const loading = useSelector((state) => state.coinsApiReducer.loading);
  const currency = useSelector((state)=>state.currencyReducer.setCurrency);
  const dispatch = useDispatch();


  //dispatch the action to fetch coin data
  useEffect(() => {
    dispatch(fetchAsyncCoins(currency));
  }, [dispatch,currency])

    //This function takes a number and returns its compact value
    // Ex : 1500000 => 1.5M  
    const numbersFormatter = (number) => {
    const f = new Intl.NumberFormat("en-us", {
      notation: "compact",
    });

    return f.format(number);
  };


  //if there is problem in fetching coin data then till loading screen show
  if (loading) {
    return (
      <div className="bg-white h-full flex flex-col justify-center items-center rounded-lg shadow-md">
        <RotatingSquare
          height="100"
          width="100"
          color="#87CEEB"
          ariaLabel="rotating-square-loading"
          strokeWidth="4"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className='font-semibold'>Loading...</p>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-3'>
      <p className='font-bold'>Cryptocurrency by</p>
      <p className='font-semibold border-b-2 pb-1'>market cap</p>
      <div className='py-1'>
        {
          // maps coin data
          coins.map((item) => {
            return <div key={item.symbol} className='flex justify-between p-2'>
              <div className='flex flex-col justify-center gap-1'>
                <div className='flex items-center gap-1'>
                  <img src={item.image} alt={""} width="26px" />
                  <p className='font-semibold'>{item.name}</p>
                </div>
                <div className='flex gap-1 text-xs '>
                  <span className='font-semibold'>Mkt.Cap:</span>
                  <span>{symbol}</span>
                  <p>{numbersFormatter(item.market_cap)}</p>
                </div>
              </div>
              <div className=''>
                <div>
                  {
                    item.price_change_percentage_24h > 0 ?
                      <div className='flex justify-center items-center gap-1'>
                        <img src={increase} alt='up' width="35px" />
                        <span className='text-lime-400 text-xs font-semibold'>{`${item.price_change_percentage_24h.toFixed(3)}%`}
                        </span>
                      </div> :
                      <div className='flex justify-center items-center gap-1'>
                        <img src={decrease} alt='down' width="35px" />
                        <span className='text-red-400 text-xs font-semibold'>{`${item.price_change_percentage_24h.toFixed(3)}%`}
                        </span>
                      </div>
                  }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
