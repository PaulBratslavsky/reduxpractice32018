import React from 'react';
import {connect} from 'react-redux';

const InputMirror = (props) => {
    return(
        <div className="input-mirror-component">
            <h1>React Redux Input Field</h1> 
            <input type="text" placeholder="Enter Text Here" value={props.inputValue} />
            <p>{props.inputValue}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps)(InputMirror);
