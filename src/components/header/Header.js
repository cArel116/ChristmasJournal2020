import React from "react"
import logo from '../../../public/logo.svg';
import Button from 'react-bootstrap/Button';

export const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Christmas Journal 2020</h2>
                <p>
                    <Button variant="outline-primary" to={"/dashboard"}>ENTER</Button>
                </p>
            </header>
        </div >
    );
}