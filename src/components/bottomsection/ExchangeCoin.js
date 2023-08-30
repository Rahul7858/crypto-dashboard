//imports reactHooks 
import React, { useEffect, useState } from 'react'

//imports base URL from data folder
import { api } from '../../redux/data';

export const ExchangeCoin = () => {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [sellCoin, setSellCoin] = useState('Bitcoin');
    const [buyCoin, setBuyCoin] = useState('Ether');
    const [result, setResult] = useState();
    const [error, setError] = useState(null);
    const [symbol, setSymbol] = useState('');

    //fetching exchange_rates data     
    async function fetchExchangeData() {
        try{
            const response = await api.get(`exchange_rates`);
            const data = response.data.rates;

        //Extract name, unit, value from data and store in tempArray
        const tempArray = Object.entries(data).map((item) => {
            return {
                value: item[1].name,
                unit: item[1].unit,
                rate: item[1].value
            }
        })

        //Set tempArray in setList
        setList(tempArray);
        }
        catch(e){
            console.log("Failed to fetch data...")
        }
    };

    //fetching exchange_rates data
    useEffect(() => {
        fetchExchangeData()
    }, [])

    console.log(list)


    //This changeHandler updates the current value
    function changeHandler(e) {
        const val = e.target.value;

        //if input value is more than 5 than update setError
        if (val > 5) {
            setError("Limit exceeded");
        }
        else {
            setInputValue(val);
            setError(null);
        }
    }



    //This clickHandler for find rates into list and update sellRate and buyRate 
    function clickHandler() {
        if (list.length > 0) {
            const Sellselect = list.find((item) => {
                return item.value === sellCoin
            });

            const Buyselect = list.find((item) => {
                return item.value === buyCoin
            });

            const sellRate = Sellselect.rate;
            const buyRate = Buyselect.rate;
            const buyUnit = Buyselect.unit;

            // console.log(sellRate, buyRate, buyUnit);

            //This is mathematical calculation for exchange rate
            const resultValue = (inputValue * buyRate) / sellRate;
            setResult(resultValue.toFixed(3));
            setSymbol(buyUnit);
        }
        return;
    }


    return (
        <div className='bg-white mt-1 rounded-lg shadow-md px-3 pb-1 w-full'>
            <div className='flex justify-between items-center gap-2 w-full'>
                <div className='flex flex-col gap-2'>
                    <div className="p-4 font-bold">
                        <p>Exchange Coins</p>
                    </div>
                    <div className='flex  justify-center items-center gap-4 mx-3'>
                        <span className='text-red-500 font-semibold'>Sell</span>
                        <div>

                            {/* dropdown for sell coin */}
                            <select className='bg-slate-100 h-10 font-semibold rounded-md shadow-sm w-[150px] focus:outline-none' onChange={(e) => setSellCoin(e.target.value)} value={sellCoin}>
                                <option selected disabled hidden>Loading...</option>
                                {
                                    list.map((item, index) => {
                                        return <option key={index}>{item.value}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex  justify-center items-center gap-4 mx-3'>
                        <span className='text-green-500 font-semibold '>Buy</span>
                        <div>

                            {/* dropdown for buy coin */}
                            <select className='bg-slate-100 h-10 font-semibold rounded-md shadow-sm w-[150px] focus:outline-none' onChange={(e) => setBuyCoin(e.target.value)} value={buyCoin}>
                                <option selected disabled hidden>Loading...</option>
                                {
                                    list.map((item, index) => {
                                        return <option key={index}>{item.value}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center gap-2 pr-12'>
                    <div className='font-semibold text-sm '>
                        <p>Enter Value :-</p>
                    </div>
                    <div className=''>

                        {/* This is input field for amount value */}
                        <input
                            className='w-[100px] border-2 px-2 focus:outline-none rounded-md'
                            type='number'
                            value={inputValue}
                            onChange={changeHandler}
                            placeholder='Amt:'
                        />

                        {/* if error occurs in input field then this error show */}
                        {error && (
                            <p className="place-self-center text-red-400 font-semibold text-sm">
                                {error}
                            </p>)
                        }
                    </div>

                    {/* This show price of exchange_rates */}
                    <div className='text-blue-400 font-semibold'>
                        <p>{result} {symbol}</p>
                    </div>
                </div>
            </div>

            {/* This button convert amount into exchange_rates */}
            <div className='flex justify-center items-center'>
                <button className='rounded-lg mt-5 mb-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 duration-300' onClick={clickHandler}>Exchange</button>
            </div>
        </div>
    )
}
