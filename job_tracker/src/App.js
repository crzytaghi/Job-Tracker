import React from 'react';
import './App.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Form from './components/form';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends React.Component{
  render = () => {
    return(
      <div className="container">
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
