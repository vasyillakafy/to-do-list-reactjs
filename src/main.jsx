import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import All from './pages/All.jsx'
import Active from './pages/Active.jsx'
import Completed from './pages/Completed.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<All/>}/>
          <Route path='active' element={<Active/>}/>
          <Route path='completed' element={<Completed/>}/>
        </Route>
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
