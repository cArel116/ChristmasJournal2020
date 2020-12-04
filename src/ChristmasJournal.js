import React from "react"
import { Route } from "react-router-dom"
import './ChristmasJournal.css';
import { Header } from './components/header/Header'
import { ApplicationViews } from './components/ApplicationViews';

export const ChristmasJournal = () => {
  return (
    <>
      <Route>
        <Header />
        <ApplicationViews />
      </Route>
    </>
  )
}