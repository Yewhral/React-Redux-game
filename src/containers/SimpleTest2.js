import React, { Component } from 'react';
import logo from './../images/logo.svg';
import '../styles/App.css';

class TestowyKomponent2 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo-back" alt="logo" />
                    <h1 className="App-title">Welcome DETE</h1>
                </header>
                <p className="App-intro">
                    ASD, ASD <code>src/App.js</code> and save to ASD.
                </p>
            </div>
        );
    }
}

export default TestowyKomponent2;