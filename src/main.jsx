import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";

import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorage';
import todosReducer from "./features/todoSlice";

import Layout from './components/Layout.jsx'
import All from './pages/All.jsx'
import Active from './pages/Active.jsx'
import Completed from './pages/Completed.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const store =  configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<All/>}/>
          <Route path='active' element={<Active/>}/>
          <Route path='completed' element={<Completed/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
