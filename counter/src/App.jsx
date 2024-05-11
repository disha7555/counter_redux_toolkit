import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { incCount } from './store/slices/counterSlice';
import { decCount } from './store/slices/counterSlice';
import { resetCount } from './store/slices/counterSlice';
function App() {
  
  const dispatch=useDispatch();
  const count = useSelector(state => state.counter);
  const incrementCount=()=>{
    dispatch(incCount())
  }
  const decrementCount = () => {
    dispatch(decCount());
  };

  const resetCounter = () => {
    dispatch(resetCount());
  };
  return (
    <>
      <button style={{color:"white",backgroundColor:'blueviolet'}} onClick={incrementCount}>Increment</button>
      <br/>
      <h2>{count}</h2>
    
      <button style={{color:"white",backgroundColor:'blueviolet'}} onClick={decrementCount}>Decrement</button>
      <br/>
      <br/>
      <button style={{color:"white",backgroundColor:'red'}} onClick={resetCounter}>Reset</button>
    </>
  )
}

export default App
