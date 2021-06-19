import React from 'react'
import { MainTemplate } from './templates/MainTemplate/MainTemplate'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  )
}

export default App
