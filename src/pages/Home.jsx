import _ from "lodash";
import { useState } from "react"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrashAlt, FaPencilAlt, FaCheckCircle } from "react-icons/fa";

const Home = () =>{
  const [userInput, setUserInput] = useState();
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = () => {
    if(userInput){
      const newTodo = {
        id: _.uniqueId(),
        message: userInput,
        completed: false
      }
      setTodos(currentTodos => [newTodo, ...currentTodos]);
      setUserInput("");
    }
  }

  const handleMarkAsCompleted = (id) => {
    setTodos(currentTodos => currentTodos.map(todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }

  const handleRemoveTodo = (id) => {
    setTodos(currentTodos => currentTodos.filter(todos => todos.id !== id))
  }

  console.log({todos})

  return(
    <>
      <div className='bg'>
        <Container className='bg-body rounded mx-auto'>
          <h4 className='text-center p-5'>What's The Plan For Today?</h4>
          <div className='row justify-content-center'>
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className='col-9 rounded p-2' 
              placeholder='Enter your activity' />
            <button onClick={handleCreateTodo} className='btn-cs col-1 rounded p-2'>Add</button>
          </div>
          <div>
            {
              todos.map((todo, index) => (
                <div key={index} className="d-flex bd-highlight bg-light p-2 m-2">
                  <h6 className="p-2 flex-grow-1 bd-highlight">{todo.message}</h6>
                  <input 
                    type="checkbox" 
                    className="p-2 bd-highlight mx-2" 
                    name="completed"
                    checked={todo.completed}
                    onChange={()=> handleMarkAsCompleted(todo.id)}/>
                  <button onClick={() => handleRemoveTodo(todo.id)} className="p-2 bd-highlight mx-2 rounded btn-cs">
                    <FaTrashAlt/>
                  </button>
                </div>
              ))
            }
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home