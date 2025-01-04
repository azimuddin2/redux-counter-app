import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './redux/features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter App With Redux</h1>
      <button onClick={handleIncrement}>Increment</button>
      <span className='counter'>{count}</span>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <button onClick={() => handleIncrementByAmount(5)} style={{ margin: '8px' }}>Increment By 5</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
