
import {hot} from "react-hot-loader";
import React, { Component} from "react";
import "./App.css";
import Logo from "./react-logo.png"

class App extends Component{
    render(){
        return(
            <div className="App">
                <img src={Logo} className="pulse" alt=""/>
                <h1> Arne's React Boilerplate </h1>
                <p>Toolchain:</p>
                <ul>
                    <li>Bundler: Webpack</li>
                    <li>Compiler: Babel</li>
                    <li>HMR: React-hot-loader</li>
                    <li>Linter: ESlint</li>
                </ul>
            </div>
        );
    }
}

export default hot(module)(App);
