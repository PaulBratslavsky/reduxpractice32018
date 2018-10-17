import {createStore} from 'redux';

const initialState = {
    inputValue: 'Hello'
}

const reducer = (state = initialState, action) => {
    console.log('from reducer', action);
    return state;
}

const store = createStore(reducer);

export default store;
