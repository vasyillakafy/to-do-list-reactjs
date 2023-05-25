import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/todoSlice';
import { Helmet } from 'react-helmet';

const Layout = () => {
  const userInput = useSelector(state => state.todos.userInput);
  const dispatch = useDispatch();

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch(actions.createTodo())
  }

  const handleSetUserInput = (userInput) => {
    dispatch(actions.setUserInput({userInput}))
  }

  return(
      <>
        <Helmet>
          <title>To Do List with React.js - vasyillakafy</title>
        </Helmet>
        <div className='p-4'></div>
        <Container className='bg-body rounded mx-auto'>
          <h5 className='text-center p-4'>What's The Plan For Today?</h5>
          <div className='d-flex flex-row bd-highlight mb-3'>
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => handleSetUserInput(e.target.value)} 
              className='p-2 flex-grow-1 bd-highlight rounded mx-3' 
              placeholder='Enter your activity' />
            <button onClick={handleCreateTodo} className='p-2 bd-highlight btn-cs rounded me-3'>Add</button>
          </div>
          <div className='mt-3 p-3'>
            <nav> 
              <ul className='d-flex justify-content-between'>
                <li >
                  <NavLink to={"/"} className='h6 p-2 text-dark nv rounded'>ALL</NavLink>
                </li>
                <li>
                  <NavLink to={"/active"} className='h6 p-2 text-dark nv rounded'>ACTIVE</NavLink>
                </li>
                <li>
                  <NavLink to={"/completed"} className='h6 p-2 text-dark nv rounded'>COMPLETED</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <section className="p-2">
            <Outlet />
          </section>
        </Container>
        <div className='p-4'></div>
    </>
  )
}

export default Layout