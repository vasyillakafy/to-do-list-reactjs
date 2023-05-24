import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/todoSlice';

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
        <div className='p-4'></div>
        <Container className='bg-body rounded mx-auto'>
          <h5 className='text-center p-4'>What's The Plan For Today?</h5>
          <div className='row justify-content-center'>
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => handleSetUserInput(e.target.value)} 
              className='col-8 rounded p-2 mx-2' 
              placeholder='Enter your activity' />
            <button onClick={handleCreateTodo} className='btn-cs col-1 rounded p-2'>Add</button>
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