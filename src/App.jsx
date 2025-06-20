import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';


function App() {


  return (
    <>
    <div className="App">
   <Router>
      <ErrorBoundary>
        <Navbar />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="loader animate-spin rounded-full"></div>
            </div>
          }
        >
        
          <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </React.Suspense>
        </ErrorBoundary>
    </Router>
    </div>

    </>
  )
}

export default App
