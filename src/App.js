import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
