import React from 'react'
import { useState } from "react";

const FinanceCalc = () => {

    const [inputIncome, setInputIncome] = useState("");
    const [inputFood, setInputFood] = useState("");
    const [inputRent, setInputRent] = useState("");
    const [inputClothes, setInputClothes] = useState("");

    const handleIncome = (e) => {
        setInputIncome(e.target.value);
    };

    const handleFood = (e) => {
        setInputFood(e.target.value);
    }
    const handleRent = (e) => {
        setInputRent(e.target.value);
    }
    const handleClothes = (e) => {
        setInputClothes(e.target.value);
    }

    return (
        <div className='text-center'>
            <h1 className='text-3xl text-cyan-600 mb-4'>Income</h1>
            <div className='grid grid-cols-2 gap-4'>
                <h4 className='text-xl'>Income</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="number" onChange={handleIncome} value={inputIncome} />
            </div>
            <h1 className='text-3xl text-cyan-600 my-4'>Expenses</h1>
            <div className='grid grid-cols-2 gap-4'>
                <h4 className='text-xl'>Food</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="number" onChange={handleFood} value={inputFood} />
                <h4 className='text-xl'>Rent</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="number" onChange={handleRent} value={inputRent} />
                <h4 className='text-xl'>Clothes</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="number" onChange={handleClothes} value={inputClothes} />
            </div>
            <button className='my-8 bg-cyan-100 px-8 py-4 font-bold rounded hover:text-cyan-100 hover:bg-black hover:ease-in-out duration-300'>Calculate</button>
        </div>
    )
}

export default FinanceCalc