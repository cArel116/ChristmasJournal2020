import React from "react"
import { Route } from "react-router-dom"
import { ChristmasList } from "./journal/ChristmasList"



export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/dashboard">
                <ChristmasList />
            </Route>
        </>
    )
}