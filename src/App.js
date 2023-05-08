import './App.css';
import FinanceBanner from './components/FinanceBanner'
import FinanceCalc from './components/FinanceCalc';

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl mx-auto text-center my-8'>Welcome to <span className='text-cyan-600'>Finance Planer</span></h1>
      <div className='grid grid-cols-2 gap-8'>
        <FinanceBanner />
        <FinanceCalc />
      </div>
    </div>
  );
}

export default App;