import React from 'react'

//imports library
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

//created manually data for portfolio
export const Portfolio = () => {

    const portfolioData = [
        {
            name: "Bitcoin",
            amount: 375,
            id: 0
        },
        {
            name: "Tether",
            amount: 375,
            id: 1
        },
        {
            name: "Ethereum",
            amount: 250,
            id: 2
        },
    ];


    //maps portfoliodata data then apply reduce function for total amounts
    const totalValue = portfolioData.map((x) => x.amount)
        .reduce((sum, amount) => sum + amount, 0);

    const labels = portfolioData.map((x) => x.name);
    const data = portfolioData.map((x) => x.amount);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "$",
                data: data,
                backgroundColor: ["gray", "blue", "green"],
                borderWidth: 1,
                hoverOffset: 8,
            },
        ],
    };

    const options = {
        aspectRatio: 2,
        plugins: {
            legend: {
                position: "right",
                fullWidth: false,
                labels: {
                    color: "#5c5c5c",
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        weight: "bold",
                    },
                },
            },
            datalabels: {
                align: "center",
                color: "#FFF",
                font: {
                    size: 18,
                    weight: "bold",
                },
                formatter: (value, context) => {
                    return "$" + value;
                },
            },
        },
    };

    return (
        <div className='bg-white mt-1 pb-1 rounded-lg shadow-md'>
            <div className="flex items-center justify-between pt-4 px-8">
                <h1 className="font-bold">Portfolio</h1>
                <p className="font-semibold text-sm">
                    Total value :{" "}
                    <span className="font-semibold">
                        ${totalValue}
                    </span>{" "}
                </p>
            </div>

            {/* This is Pie chart */}
            <div className="md:pl-9 lg:pl-9 pt-4 pb-10 w-[300px] ">
                <Pie data={chartData} options={options} plugins={[ChartDataLabels]}></Pie>
            </div>
        </div>
    )
}
