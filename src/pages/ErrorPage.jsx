import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/layout.css"
import { Container } from 'react-bootstrap';
import { FaArrowCircleLeft } from "react-icons/fa";

const ErrorPage = () =>{
  return(
    <div className='bg'>
      <div className='p-5'></div>
      <Container className='bg-body rounded'>
          <h4 className='text-center pt-5'>404 ERROR</h4>
          <h4 className='text-center pb-5'>Page Not Found</h4>
          <h6 className='text-center pb-5'>
            <NavLink className='nv'>
              <FaArrowCircleLeft/> &nbsp; Back To Home
            </NavLink>
          </h6>
      </Container>
    </div>
  )
}

export default ErrorPage