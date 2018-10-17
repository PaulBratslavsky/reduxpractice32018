import React, { Component } from 'react';
import './App.css';
import InputMirror from './Components/InputMirror/index';

import store from './Store/index';

class App extends Component {
  render() {
    return (
      <div className="main-div">
          <InputMirror store={store}/>
      </div>
    );
  }
}

export default App;
