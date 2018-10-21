import {createStore} from 'redux';

const initialState = {
    inputValue: ''
}

const reducer = (state = initialState, action) => {
    console.log('from reducer', action);
    console.log('from reducer action.payload is', action.payload);
    switch (action.type) {
        case 'INPUT_CHANGE':
            return Object.assign( {}, state, { inputValue: action.payload } );
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
