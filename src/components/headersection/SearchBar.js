//imports reactHooks
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

//import icon from react icon 
import { BsSearch } from 'react-icons/bs'


export const SearchBar = () => {
  const coins = useSelector((state) => state.coinsApiReducer.coins)
  const [search, setSearch] = useState([]);

  //This searchHandler function filter search value in coins array....
  function searchHandler(event) {
    const searchCrypto = event.target.value;
    const filteredArray = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCrypto.toLowerCase()));

    if (searchCrypto === "") {
      setSearch([])
    }
    else {
      setSearch(filteredArray);
    }
  }

  return (

    //This top level div containing search bar and search filter...
    <div className=' ml-3'>

      {/* This form contains button and input */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className=' relative mx-auto text-gray-600'>

          {/* This button contain BsSearch icon */}
          <button className='absolute left-0 top-1.5 mt-3 ml-4' type='submit'>
            <BsSearch />
          </button>
          <input className=' bg-white h-12 w-full px-5 pl-12 rounded-lg text-md focus:outline-none shadow-md' type='text'
            placeholder='Search by coin'
            id='search'
            onChange={searchHandler}
          />
        </div>
      </form>

      {/* This is Search filter */}
      {search.length !== 0 && (
        <div className='absolute w-[64.5%] flex flex-col bg-white mt-2 rounded-lg overflow-hidden  shadow-md z-10'>
          {
            search.slice(0, 4).map((coin) => {
              return <div  key={coin.symbol} className='flex items-center m-2 gap-1 cursor-pointer font-semibold'>
                        <img src={coin.image} alt={coin.name} width="40px" />
                        <p>{coin.name}</p>
                        <small className='pt-0.5'>({coin.symbol})</small>
                      </div>
            })
          }
        </div>
      )}
    </div>
  )
}
