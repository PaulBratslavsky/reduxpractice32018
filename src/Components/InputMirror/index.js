import React from 'react';
import {connect} from 'react-redux';

const InputMirror = (props) => {
    return(
        <div className="input-mirror-component">
            <h1>React Redux Input Field</h1> 
            <input type="text" placeholder="Start Typing" onChange={props.inputChanged} value={props.inputValue} />
            <h3>{props.inputValue}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged: (event) => {
            console.log('input changed from mapDispatchToProps', event.target.value);
            const action = {
                type: 'INPUT_CHANGE',
                payload: event.target.value
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);