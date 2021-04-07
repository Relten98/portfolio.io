import React from 'react';
import { BrowerRoute as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import './App.css'

class App extends Component {
  render() {
    return (
       <Router>
        <div>
        <Route exact path='/' component={HomePage} />
      </Router>
      
    );
  }
}

export default App;