import React from "react"
import Button from 'react-bootstrap/Button';
import logo from "./logo.svg"

// const dashboard = [{
//     route: "/dashboard"
// }]

export const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Christmas Journal 2020</h2>
                <p>
                    <Button onClick={"/list"} variant="outline-primary">ENTER</Button>
                </p>
            </header>
        </div >
    );
}