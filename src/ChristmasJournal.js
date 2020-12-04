import React from "react"
import { Route } from "react-router-dom"
import './ChristmasJournal.css';
import { ApplicationViews } from './components/ApplicationViews';

export const ChristmasJournal = () => {
  return (
    <>
      <Route>
        <ApplicationViews />
      </Route>
    </>
  )
}