import {createStore} from 'redux';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import Counter from '../components/counter';

const initialState = {counter: 0 , showCounter: true}
const CounterSlice =  createSlice({
    name:'Counter',
    initialState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state ,action) {
            state.counter= state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter =!state.showCounter
        }
    }


})

// const CounterReducer = (state = initialState, action) => {
//     if(action.type === 'increment')
//     return{
// counter: state.counter + 1,
// showCounter: state.showCounter
// }

// if(action.type === 'increase')
// return{
// counter: state.counter + action.amount,
// showCounter: state.showCounter

// }

// if(action.type === 'decrement')
// return{
// counter: state.counter - 1,
// showCounter: state.showCounter

// }

// if(action.type === 'toggle')
// return{
//     showCounter: !state.showCounter,
//     counter: state.counter


// }

// return state;
// }

const store = configureStore({
    reducer: CounterSlice.reducer
});

export const CounterAction = CounterSlice.actions;

export default store