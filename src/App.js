import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'


import Login from './components/Login.js'
import Home from './components/Home.js'


import './App.css'
import PageNotFound from './components/PageNotFound.js'


function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/login' element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
