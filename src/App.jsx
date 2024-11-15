/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './InitialComponent/Header'
import Home from './Pages/Home'
import Footer from './InitialComponent/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  )
}

export default App