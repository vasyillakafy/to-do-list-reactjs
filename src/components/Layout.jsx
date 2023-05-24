import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import TodoCard from './TodoCard';

const Layout = () => {
  return(
      <div className='bg'>
        <Container className='bg-body rounded mx-auto'>
          <h4 className='text-center p-5'>What's The Plan For Today?</h4>
          <div className='row justify-content-center'>
            <input 
              type="text" 
              name="" 
              id="" 
              className='col-9 rounded p-2' 
              placeholder='Enter your activity' />
            <button className='btn-cs col-1 rounded p-2'>Add</button>
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
          <TodoCard/>
          <TodoCard/>
          </div>

        </Container>
    </div>
  )
}

export default Layout