import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Form from './components/form';


class App extends React.Component{
  render = () => {
    return(
      <div>
        <h1>Sup Fam</h1>
        <Form />
      </div>
    )
  }
}

export default App;
