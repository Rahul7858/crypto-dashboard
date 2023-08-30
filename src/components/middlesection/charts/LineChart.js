//imports reactHooks
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import async file from apiSlices 
import { fetchAsyncCharts } from '../../../redux/apiSlices/chartsApiSlice';

//imports library
import moment from "moment/moment";
import { RotatingSquare } from 'react-loader-spinner';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = () => {

    const currency = useSelector((state) => state.currencyReducer.setCurrency);
    const day = useSelector((state) => state.daysReducer.setDays);
    const symbol = useSelector((state) => state.symbolReducer.setSymbol);
    const coin = useSelector((state) => state.selectedCoinReducer.setCoin);
    const loading = useSelector((state) => state.chartsApiReducer.loading)

    const chartData = useSelector((state) => state.chartsApiReducer.chart);

    const dispatch = useDispatch();

    //dispatch the action to fetch chart data
    useEffect(() => {
        dispatch(fetchAsyncCharts({ coin: coin, currency: currency, time: day }))
    }, [coin, currency, day])

    //This function takes a number and returns its compact value
    // Ex : 1500000 => 1.5M
    const numbersFormatter = (number) => {
        const f = new Intl.NumberFormat("en-us", {
            notation: "compact",
        });

        return f.format(number);
    };


    const lineChartData = chartData.map((value) => ({
        x: value[0],
        y: value[1]
    }));



    const options = {

        aspectRatio: 2,
        responsive: true,
        maintainAspectRatio: false,

        animation: {
            animateScale: true,
        },
        plugins: {
            legend: {
                position: "top",
                align: "end",
            },
        },
        title: {
            display: true,
            text: "Line Chart",
        },

        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    border: false,
                    borderDash: [6],
                    display: false,
                }
            },
            y: {
                //This display symbols in y axis
                ticks: {
                    callback: function (value, index, ticks) {
                        return symbol + numbersFormatter(value);
                    }
                },
                title: {
                    display: true,
                    text: `Price in ${symbol}`,
                },
            },
        },
    };

    const data = {

        //moment covert x axis data into proper date format
        labels: lineChartData.map((value) => moment(value.x).format("MMM Do")),

        // maps the datasets based on selected coins/currency/day to display chart
        datasets: [
            {
                label: coin
                    ? `${currency.toUpperCase()} vs ${coin.toUpperCase()}  `
                    : currency.toUpperCase(),
                data: lineChartData.map((val) => val.y),
                borderColor: 'rgb(0, 191, 255)',
            },
        ],
    };

    //if there is problem in fetching chart data then till loading screen show
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-[340px]">
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

        //This is line chart
        <div className=' w-full h-[340px] p-3'>
            <Line data={data} options={options} />
        </div>
    )
}
