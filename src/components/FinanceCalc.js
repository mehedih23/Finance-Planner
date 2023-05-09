import React from 'react'
import { useState } from "react";

const FinanceCalc = () => {

    const [inputIncome, setInputIncome] = useState("");
    const [inputFood, setInputFood] = useState("");
    const [inputRent, setInputRent] = useState("");
    const [inputClothes, setInputClothes] = useState("");
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [getBalance, setBalance] = useState(0);

    const [getSave, setSave] = useState('');
    const [getSavings, setGetSavings] = useState(0);
    const [getRemainBalance, setRemainBalance] = useState(0);

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
            alert('Your income can not be text.')
        } else if (inputIncome === '') {
            alert('Your income can not be empty.')
        } else if (isNaN(inputFood) || isNaN(inputRent) || isNaN(inputClothes)) {
            alert('Something went wrong. Please enter number')
        } else if (inputFood === '' || inputRent === '' || inputClothes === '') {
            alert('Field can not be empty.')
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

    const handleSave = (e) => {
        setSave(e.target.value);
    }

    const handleSaveBtn = () => {
        if (getBalance === 0) {
            alert('First details first input.');
        } else if (isNaN(getSave)) {
            alert('Your savings can not be text.')
        } else if (getSave === '') {
            alert('Field can not be empty.')
        } else {
            const save = parseInt(getSave);
            const savings = getBalance * save / 100;
            if (savings > getBalance) {
                alert("You don't have enough money to save.")
            } else {
                const remainBalance = getBalance - savings;
                setGetSavings(savings);
                setRemainBalance(remainBalance);
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
            <button className='my-8 bg-cyan-300 px-8 py-4 font-bold rounded hover:text-cyan-100 hover:bg-black hover:ease-in-out duration-500' onClick={calculateExpense}>Calculate</button>
            <div className='grid grid-cols-2 gap-4 w-2/4 mx-auto mb-8'>
                <h4 className='font-bold'>Total Expenses : </h4>
                <p className='font-bold'>{totalExpenses}</p>
                <h4 className='font-bold'>Balance : </h4>
                <p className='font-bold'>{getBalance}</p>
            </div>
            <div className='flex justify-around items-center gap-4 w-3/4 mx-auto'>
                <h4>Save</h4>
                <input className='w-1/4 border border-cyan-300 rounded focus:outline-none py-1 px-2' type="text" onChange={handleSave} value={getSave} />
                <span> % </span>
                <button className='bg-cyan-300 px-2 py-1 font-bold rounded hover:text-cyan-100 hover:bg-black hover:ease-in-out duration-500' onClick={handleSaveBtn}>Save</button>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-4 w-2/4 mx-auto mb-8 mt-4'>
                    <h4 className='font-bold'>Total Savings : </h4>
                    <p className='font-bold'>{getSavings}</p>
                    <h4 className='font-bold'>Remain Balance : </h4>
                    <p className='font-bold'>{getRemainBalance}</p>
                </div>
            </div>
        </div>
    )
}

export default FinanceCalc