import React from 'react'
import { useState } from "react";
import { ColorRing } from 'react-loader-spinner'

const FinanceCalc = () => {

    const [inputIncome, setInputIncome] = useState("");
    const [inputFood, setInputFood] = useState("");
    const [inputRent, setInputRent] = useState("");
    const [inputClothes, setInputClothes] = useState("");
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [getBalance, setBalance] = useState(0);

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

    const calculateExpense = () => {
        if (isNaN(inputIncome)) {
            alert('First fill your income.')
        } else if (isNaN(inputFood) || isNaN(inputRent) || isNaN(inputClothes)) {
            alert('Something went wrong. Have a look.')
        } else if (inputFood === '' || inputRent === '' || inputClothes === '') {
            alert('Fill every field.')
        } else {
            const income = parseInt(inputIncome);
            const food = parseInt(inputFood);
            const rent = parseInt(inputRent);
            const clothes = parseInt(inputClothes);

            const expensesSum = food + rent + clothes;

            if (income < expensesSum) {
                alert('Your expenses are above your needs.')
            } else {
                const balance = income - expensesSum;
                setTotalExpenses(expensesSum);
                setBalance(balance)
            }

        }
    }

    

    return (
        <div className='text-center'>
            <h1 className='text-3xl text-cyan-600 mb-4'>Income</h1>
            <div className='grid grid-cols-2 gap-4'>
                <h4 className='text-xl'>Income</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleIncome} value={inputIncome} />
            </div>
            <h1 className='text-3xl text-cyan-600 my-4'>Expenses</h1>
            <div className='grid grid-cols-2 gap-4'>
                <h4 className='text-xl'>Food</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleFood} value={inputFood} />
                <h4 className='text-xl'>Rent</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleRent} value={inputRent} />
                <h4 className='text-xl'>Clothes</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleClothes} value={inputClothes} />
            </div>
            <button className='my-8 bg-cyan-100 px-8 py-4 font-bold rounded hover:text-cyan-100 hover:bg-black hover:ease-in-out duration-500' onClick={calculateExpense}>Calculate</button>
            <div className='grid grid-cols-2 gap-4 w-2/4 mx-auto mb-8'>
                <h4 className='font-bold'>Total Expenses : </h4>
                <p className='font-bold'>{totalExpenses}</p>
                <h4 className='font-bold'>Balance : </h4>
                <p className='font-bold'>{getBalance}</p>
            </div>
            <div className='grid grid-cols-4 gap-2 w-3/4 mx-auto'>
                <h4>Save</h4>
                <input className='w-3/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleSave} value={save} />
                <span> % </span>
                <button>Save</button>
            </div>
        </div>
    )
}

export default FinanceCalc