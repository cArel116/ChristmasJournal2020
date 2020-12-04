import React from "react"
import { Route } from "react-router-dom"
import { ChristmasList } from "./journal/ChristmasList"
import { Header } from './header/Header'


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Header />
            </Route>

            <Route exact path="/list">
                <ChristmasList />
            </Route>
        </>
    )
}