import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CounterAction } from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const show = useSelector(state => state.showCounter)
  const incrementHnadler = () =>{
    dispatch(CounterAction.increment());
  };

  const decrementHandler = () =>{
    dispatch(CounterAction.decrement());
  };

  const increaseHnadler = () =>{
    dispatch(CounterAction.increase(10));
  };
    const toggleCounterHnadler = () =>{
      dispatch(CounterAction.toggleCounter())
    }
  return (
    <div className='flex flex-col items-center gap-5'>
        <h1 className='border-solid border-2 border-red-400'>Redux Counter</h1>
        {show && <div>{counter}</div>}
        <div className='flex justify-center gap-5'>
          <button onClick={incrementHnadler}>Increment</button>
          <button onClick={increaseHnadler}>IncreaseBy 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHnadler}>Toggle Counter</button>
    </div>
  )
}

export default Counter