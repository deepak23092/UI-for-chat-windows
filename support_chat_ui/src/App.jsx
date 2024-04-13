import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Messages from './components/Messages'
import Chat from './components/Chat'
import Help from './components/Help'
import News from './components/News'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/messages' element={<Messages />} />
        <Route exact path='/chat' element={<Chat />} />
        <Route exact path='/help' element={<Help />} />
        <Route exact path='/news' element={<News />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
